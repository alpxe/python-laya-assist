import glob
import os
import re
import shutil

from PyQt5.QtGui import QStandardItemModel, QStandardItem
from PyQt5.QtWidgets import QMainWindow, QPushButton
from PyQt5.QtCore import Qt, QModelIndex, QPoint

from com.core.process.generate import Generate
from com.mvc.controller.notice import Notice
from com.mvc.model.modellocator import ModelLocator
from ui.gulib_ui import Ui_Form
import com.core.apps as apps


class GuLib(QMainWindow, Ui_Form):
    """
    导入类库实现页
    """

    ASSETS_LIBS = 'assets/libs'

    model = None

    def __init__(self):
        super(GuLib, self).__init__()
        self.setupUi(self)

        self.ASSETS_LIBS = os.path.join(ModelLocator.root, self.ASSETS_LIBS)

    def show(self) -> None:
        super(GuLib, self).show()

        self.listView.setContextMenuPolicy(Qt.CustomContextMenu)  # 允许发出右键信号
        self.listView.customContextMenuRequested[QPoint].connect(self.__list_widget_context)

        self.__extract()
        self.__init_event()

    def __list_widget_context(self, point):
        """
        右键子项打开文件夹
        :param point:
        :return:
        """
        self.tipsTxt.setText("")
        index = self.listView.indexAt(point)
        item = self.model.itemData(index)
        name = item[0]

        Generate().open_file(os.path.join(self.ASSETS_LIBS, name))

    def __init_event(self):
        self.checkBtn.clicked.connect(self.__check_click_handler)
        self.generateBtn.clicked.connect(self.__generate_click_handler)

    def closeEvent(self, event) -> None:
        self.tipsTxt.setText("")
        apps.facade().sendNotification(Notice.APP_STAGE_SHOW)

    def __extract(self):
        project = ModelLocator.project

        total = re.findall(r"[^\/]+$", project)  # 项目名称
        if len(total) > 0:
            self.totalTxt.setText(total[0])
        else:
            self.totalTxt.setText("请返回并指定项目！")

        self.list_table(self.ASSETS_LIBS)

    def list_table(self, fp):
        # libs 文件夹
        self.model = QStandardItemModel()

        for child in os.listdir(fp):
            child_path = os.path.join(fp, child)
            if os.path.isdir(child_path):
                item = QStandardItem("{}".format(child))
                item.setCheckable(True)
                item.setEditable(False)
                item.setCheckState(Qt.Checked)
                self.model.appendRow(item)

        self.listView.setModel(self.model)
        self.checkBtn.setCheckState(Qt.Checked)

    def __check_click_handler(self, e):
        self.tipsTxt.setText("")
        if e:
            self.checkBtn.setCheckState(Qt.Checked)

        for i in range(self.model.rowCount()):
            item: QStandardItem = self.model.item(i, 0)
            item.setCheckState(self.checkBtn.checkState())

    def __generate_click_handler(self):
        self.tipsTxt.setText("正在导入...")
        self.errTxt.setText('')

        files = []
        for i in range(self.model.rowCount()):
            item: QStandardItem = self.model.item(i, 0)
            if item.checkState() == Qt.Checked:
                files.append(item.text())

        err = ''
        for p in files:
            lp = os.path.join(self.ASSETS_LIBS, p)
            if os.path.exists(lp):
                self.__enter(lp)
                self.tipsTxt.setText('导入{0}'.format(p))
            else:
                err += '缺失 {} \n'.format(p)

        self.tipsTxt.setText("导入完成!")
        self.errTxt.setText(err)

    def __enter(self, path):
        project = ModelLocator.project

        for url in glob.glob(path + '/*.js'):
            if not os.path.basename(url).endswith('.min.js'):  # js
                shutil.copy(url, os.path.join(project, 'bin/libs'))
            else:  # min js
                shutil.copy(url, os.path.join(project, 'bin/libs/min'))

        for url in glob.glob(path + '/*.d.ts'):
            shutil.copy(url, os.path.join(project, 'libs'))
