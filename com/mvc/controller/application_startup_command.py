from com.mvc.view.application_mediator import ApplicationMediator
from puremvc.interfaces import INotification
from puremvc.patterns.command import SimpleCommand


class ApplicationStartupCommand(SimpleCommand):
    def execute(self, notification: INotification):
        self.facade.registerMediator(ApplicationMediator(notification.getBody()))
        pass
