from django.urls import path
from . import views as views_profile

urlpatterns=[
    path("profile/", views_profile.profile, name="profile"),
]
