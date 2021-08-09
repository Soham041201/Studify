from django.apps import AppConfig


class StudifyprofileConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'studifyprofile'

    def ready(self):
        import studifyprofile.signals
