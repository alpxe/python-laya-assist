import os
import re

from PyQt5.QtGui import QStandardItemModel, QStandardItem
from PyQt5.QtWidgets import QMainWindow
from PyQt5.QtCore import Qt

from com.mvc.controller.notice import Notice
from com.mvc.model.modellocator import ModelLocator
from ui.gulib_ui import Ui_Form
import com.core.apps as apps


class GuLib(QMainWindow, Ui_Form):
    model = None

    def __init__(self):
        super(GuLib, self).__init__()
        self.setupUi(self)

    def show(self) -> None:
        super(GuLib, self).show()

        self.__extract()
        # self.initEvent()

    def closeEvent(self, event) -> None:
        apps.facade().sendNotification(Notice.APP_STAGE_SHOW)

    def __extract(self):
        project = ModelLocator.project

        total = re.findall(r"[^\/]+$", project)  # 项目名称
        if len(total) > 0:
            self.totalTxt.setText(total[0])
        else:
            self.totalTxt.setText("请返回并指定项目！")

        self.list_table('assets/libs')

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
        # self.checkAll.setCheckState(Qt.Checked)
        pass
