from django.urls import path
from . import views

urlpatterns=[
    path('', views.viewnote, name="viewnote"),
    path('create/', views.createnote, name="createnote"),
    path('deletenote/<id>/', views.deletenote, name="deletenote"),
]
