from django.shortcuts import render, redirect
from .models import Note

# Create your views here.
def viewnote(request):
    return render(request, 'notes/viewnotes.html', {'notes': Note.objects.all()})

def createnote(request):
    if request.method == "POST":
        note = Note(title=request.POST['title'], user=request.user, pdf=request.FILES['pdf'])
        note.save()
        return redirect('viewnote')

    return render(request, 'notes/createnote.html')
