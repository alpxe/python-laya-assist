from com.mvc.controller.notice import Notice
from puremvc.interfaces import INotification
from puremvc.patterns.mediator import Mediator


class StageMediator(Mediator):
    NAME = "StageMediator"

    def __init__(self, viewComponent):
        super(StageMediator, self).__init__(self.NAME, viewComponent)

    def listNotificationInterests(self):
        return [
            Notice.APP_STAGE_SHOW
        ]

    def handleNotification(self, notification: INotification):
        data = notification.getBody()

        if notification.getName() is Notice.APP_STAGE_SHOW:
            self.view.back()

    @property
    def view(self):
        return self.viewComponent
