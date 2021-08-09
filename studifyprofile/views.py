from django.shortcuts import render, redirect
from django.contrib.auth import decorators
from django.contrib import messages
from .forms import formLogic, UserUpdateForm, ProfileUpdateForm
from django.contrib.auth.decorators import login_required


def register(request):
    if request.method == 'POST':
        form = formLogic(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account has been succesfully created for {username}. You are now able to log In.')
            return redirect('login')
    else:
        form = formLogic()
    return render(request, 'users/register.html', {'form': form})
    
@login_required
def profile(request):
    if request.method == 'POST':
        u_form=UserUpdateForm(request.POST, instance=request.user)
        p_form=ProfileUpdateForm(request.POST, request.FILES, instance=request.user.profile)

        if u_form.is_valid() and p_form.is_valid():
            u_form.save()
            p_form.save()
            messages.success(request, f'Profile has been succesfully updated!')
            return redirect('profile')
    else:
        u_form=UserUpdateForm(instance=request.user)
        p_form=ProfileUpdateForm(instance=request.user.profile)

    context={
        'u_form':u_form,
        'p_form':p_form
    }
    return render (request, 'studifyprofile/profile.html', context)