import com.core.apps as apps

from PyQt5.QtGui import QIntValidator
from PyQt5.QtWidgets import QMainWindow

from com.core.process.generate import Generate
from com.mvc.controller.notice import Notice
from ui.poly_ui import Ui_Form


class Poly(QMainWindow, Ui_Form):
    def __init__(self):
        super(Poly, self).__init__()
        self.setupUi(self)

        self.paddingTxt.setValidator(QIntValidator(-100, 100, self))  # padding限制输入
        self.__initEvent()

    def __initEvent(self):
        self.inputBtn.clicked.connect(self.__openInputHandler)
        self.outputBtn.clicked.connect(self.__openOutputHandler)

        self.generateBtn.clicked.connect(self.__generateHandler)
        pass

    @staticmethod
    def __openInputHandler():
        Generate().open_file(Generate().input_file_path)
        pass

    @staticmethod
    def __openOutputHandler():
        Generate().open_file(Generate().output_file_path)
        pass

    def __generateHandler(self):
        arrange_list = ["HL", "VL"]
        align_list = ["F", "M", "T"]
        arrange = arrange_list[self.arrangeBox.currentIndex()]
        alignH = align_list[self.alignHBox.currentIndex()]
        alignV = align_list[self.alignVBox.currentIndex()]
        padding = int(self.paddingTxt.text()) if (len(self.paddingTxt.text()) > 0) else 0
        auto_delete = self.deleteCheck.isChecked()
        Generate().setting(arrange, alignH, alignV, padding, auto_delete)
        Generate().run()

    def closeEvent(self, event) -> None:
        apps.facade().sendNotification(Notice.APP_STAGE_SHOW)
