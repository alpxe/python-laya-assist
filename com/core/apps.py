from com.mvc.controller.application_facade import ApplicationFacade


def facade() -> ApplicationFacade:
    return ApplicationFacade.getInstance(ApplicationFacade.NAME)
