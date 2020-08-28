import os
import re
import json
import pyperclip
import com.core.apps as apps

from PyQt5.QtCore import Qt

from PyQt5.QtGui import QStandardItem, QStandardItemModel
from PyQt5.QtWidgets import QMainWindow

from com.mvc.controller.notice import Notice
from com.mvc.model.modellocator import ModelLocator
from ui.max_ui import Ui_Form


class MaxComponent(QMainWindow, Ui_Form):
    def __init__(self):
        super(MaxComponent, self).__init__()
        self.setupUi(self)

    def show(self) -> None:
        super(MaxComponent, self).show()
        self.__extract()
        self.initEvent()

    def __extract(self):
        project = ModelLocator.project

        total = re.findall(r"[^\/]+$", project)  # 项目名称
        if len(total) > 0:
            self.totalTxt.setText(total[0])
        else:
            self.totalTxt.setText("请返回并指定项目！")

        skins_url = os.path.join(project, "src/ui/layaMaxUI.ts")  # 场景路径
        res_url = os.path.join(project, "bin/fileconfig.json")  # 资源路径
        unp_url = os.path.join(project, "bin/unpack.json")  # unpack

        totals = []
        if os.path.exists(skins_url):
            with open(skins_url, 'r') as fp:
                lines = fp.readlines()
                arr = self.ext_skins(lines)
                self.skinsTxt.setText("[skins] {}条记录".format(len(arr)))
            totals.extend(arr)
        else:
            self.skinsTxt.setText("[skins] 不存在")

        if os.path.exists(res_url):
            with open(res_url, 'r') as fp:
                data = json.load(fp)
                arr = self.ext_res(data)
                self.resTxt.setText("[res] {}条记录".format(len(arr)))
            totals.extend(arr)
        else:
            self.resTxt.setText("[res] 不存在")

        if os.path.exists(unp_url):
            with open(unp_url, 'r') as fp:
                data = json.load(fp)
                arr = self.ext_unpack(data)
                self.unpackTxt.setText("[unpack] {}条记录".format(len(arr)))
            totals.extend(arr)
        else:
            self.unpackTxt.setText("[unpack] 不存在")

        self.model = QStandardItemModel()
        for i in totals:
            item = QStandardItem("{}".format(i))
            item.setCheckable(True)
            item.setEditable(False)
            item.setCheckState(Qt.Checked)
            self.model.appendRow(item)

        self.listView.setModel(self.model)
        self.checkAll.setCheckState(Qt.Checked)

    def initEvent(self):
        self.listView.clicked.connect(self.__itemClickHandler)
        self.checkAll.clicked.connect(self.__checkClickHandler)
        self.antBtn.clicked.connect(self.__antClickHandler)
        self.copyBtn.clicked.connect(self.__clipboard)

    def __checkClickHandler(self):
        if self.checkAll.checkState() == Qt.PartiallyChecked:
            self.checkAll.setCheckState(Qt.Checked)

        for i in range(self.model.rowCount()):
            item: QStandardItem = self.model.item(i, 0)
            item.setCheckState(self.checkAll.checkState())

    def __antClickHandler(self):
        """
        反选
        :return:
        """
        for i in range(self.model.rowCount()):
            item: QStandardItem = self.model.item(i, 0)
            if item.checkState() == Qt.Checked:  # 选中
                item.setCheckState(Qt.Unchecked)
            elif item.checkState() == Qt.Unchecked:
                item.setCheckState(Qt.Checked)
        self.__itemClickHandler()  # 修正待选框状态

    def __itemClickHandler(self):
        checked_num = 0
        for i in range(self.model.rowCount()):
            item: QStandardItem = self.model.item(i, 0)
            if item.checkState() == Qt.Checked:  # 选中
                checked_num += 1

        if checked_num == 0:
            self.checkAll.setCheckState(Qt.Unchecked)
        elif checked_num == self.model.rowCount():
            self.checkAll.setCheckState(Qt.Checked)
        else:
            self.checkAll.setCheckState(Qt.PartiallyChecked)

    def __clipboard(self):
        """
        将打勾的项 拷贝到剪切板
        :return:
        """
        str_list = []
        for i in range(self.model.rowCount()):
            item: QStandardItem = self.model.item(i, 0)
            if item.checkState() == Qt.Checked:
                str_list.append(item.text())

        pyperclip.copy("\n".join(str_list))

    @staticmethod
    def ext_skins(lines):
        links = []
        for line in lines:
            path = re.findall(r"this.loadScene\(\"(.+?)\"\)", line)
            links.extend(path)

        return ['''{{url: "{0}.json", type: Laya.Loader.JSON}},'''.format(p) for p in links]

    @staticmethod
    def ext_res(data):
        return ['''{{url: "{0}", type: Laya.Loader.ATLAS}},'''.format(item) for item in data]

    @staticmethod
    def ext_unpack(data):
        return ['''{{url: "{0}", type: Laya.Loader.IMAGE}},'''.format(item) for item in data]

    def closeEvent(self, event) -> None:
        apps.facade().sendNotification(Notice.APP_STAGE_SHOW)
