from django import forms

class createNewList(forms.Form):
    name=forms.CharField(label="name", max_length=200)
    check=forms.BooleanField(required=False)
    