from abc import ABC

from com.mvc.controller.notice import Notice
from com.mvc.view.component.stage import Stage
from com.mvc.view.stage_mediator import StageMediator
from puremvc.interfaces import INotification
from puremvc.patterns.mediator import Mediator


class ApplicationMediator(Mediator, ABC):
    NAME = "ApplicationMediator"

    def __init__(self, viewComponent):
        super(ApplicationMediator, self).__init__(self.NAME, viewComponent)

    def listNotificationInterests(self):
        return [
            Notice.EVENT_MAIN_INSTALL
        ]

    def handleNotification(self, notification: INotification):
        data = notification.getBody()

        if notification.getName() is Notice.EVENT_MAIN_INSTALL:
            self.view.stage = Stage()
            self.view.stage.show()
            self.facade.registerMediator(StageMediator(self.view.stage))
            pass

    @property
    def view(self):
        return self.viewComponent
