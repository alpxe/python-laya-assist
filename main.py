import os
import sys
import com.core.apps as apps
from PyQt5.QtWidgets import QApplication

from com.core.process.generate import Generate
from com.mvc.controller.notice import Notice
from com.mvc.model.modellocator import ModelLocator

if hasattr(sys, 'frozen'):
    os.environ['PATH'] = sys._MEIPASS + ";" + os.environ['PATH']


# /Users/alpxe/Library/Containers/LayaAssist
class Main:
    stage = None

    def __init__(self):
        # 设置根文件夹路径
        if sys.platform == "darwin":
            ModelLocator.root = os.path.join(os.path.expanduser('~/'), "Library/Containers/LayaAssist")
        else:
            ModelLocator.root = os.path.abspath(os.path.dirname("."))

        apps.facade().startup(self)
        app = QApplication(sys.argv)
        apps.facade().sendNotification(Notice.EVENT_MAIN_INSTALL)
        sys.exit(app.exec_())
        pass


if __name__ == "__main__":
    Main()
