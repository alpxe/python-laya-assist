# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'stage_ui.ui'
#
# Created by: PyQt5 UI code generator 5.15.0
#
# WARNING: Any manual changes made to this file will be lost when pyuic5 is
# run again.  Do not edit this file unless you know what you are doing.


from PyQt5 import QtCore, QtGui, QtWidgets


class Ui_Form(object):
    def setupUi(self, Form):
        Form.setObjectName("Form")
        Form.resize(400, 187)
        self.polyBtn = QtWidgets.QPushButton(Form)
        self.polyBtn.setGeometry(QtCore.QRect(20, 100, 113, 32))
        self.polyBtn.setObjectName("polyBtn")
        self.lineEdit = QtWidgets.QLineEdit(Form)
        self.lineEdit.setGeometry(QtCore.QRect(30, 150, 341, 20))
        palette = QtGui.QPalette()
        brush = QtGui.QBrush(QtGui.QColor(240, 240, 240))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Active, QtGui.QPalette.Base, brush)
        brush = QtGui.QBrush(QtGui.QColor(240, 240, 240))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Inactive, QtGui.QPalette.Base, brush)
        brush = QtGui.QBrush(QtGui.QColor(240, 240, 240))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Disabled, QtGui.QPalette.Base, brush)
        self.lineEdit.setPalette(palette)
        self.lineEdit.setFocusPolicy(QtCore.Qt.NoFocus)
        self.lineEdit.setContextMenuPolicy(QtCore.Qt.DefaultContextMenu)
        self.lineEdit.setAutoFillBackground(False)
        self.lineEdit.setFrame(False)
        self.lineEdit.setDragEnabled(False)
        self.lineEdit.setReadOnly(True)
        self.lineEdit.setObjectName("lineEdit")
        self.maxBtn = QtWidgets.QPushButton(Form)
        self.maxBtn.setGeometry(QtCore.QRect(20, 60, 113, 32))
        self.maxBtn.setObjectName("maxBtn")
        self.layoutWidget = QtWidgets.QWidget(Form)
        self.layoutWidget.setGeometry(QtCore.QRect(21, 10, 361, 33))
        self.layoutWidget.setObjectName("layoutWidget")
        self.horizontalLayout = QtWidgets.QHBoxLayout(self.layoutWidget)
        self.horizontalLayout.setContentsMargins(0, 0, 0, 0)
        self.horizontalLayout.setObjectName("horizontalLayout")
        self.label = QtWidgets.QLabel(self.layoutWidget)
        self.label.setObjectName("label")
        self.horizontalLayout.addWidget(self.label)
        self.pathTxt = QtWidgets.QLineEdit(self.layoutWidget)
        self.pathTxt.setObjectName("pathTxt")
        self.horizontalLayout.addWidget(self.pathTxt)
        self.pathBtn = QtWidgets.QPushButton(self.layoutWidget)
        self.pathBtn.setObjectName("pathBtn")
        self.horizontalLayout.addWidget(self.pathBtn)

        self.retranslateUi(Form)
        QtCore.QMetaObject.connectSlotsByName(Form)

    def retranslateUi(self, Form):
        _translate = QtCore.QCoreApplication.translate
        Form.setWindowTitle(_translate("Form", "Laya 辅助工具箱"))
        self.polyBtn.setText(_translate("Form", "多态图工具"))
        self.lineEdit.setText(_translate("Form", "https://github.com/alpxe/python-laya-assist.git"))
        self.maxBtn.setText(_translate("Form", "LayaMaxUI"))
        self.label.setText(_translate("Form", "Laya项目:"))
        self.pathBtn.setText(_translate("Form", "..."))
