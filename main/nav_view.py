from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse,HttpResponseRedirect
from django.template import loader
from django.middleware.csrf import get_token
from django.contrib.auth.hashers import make_password, check_password
import time
from . import Graph

def interchange_coordinates(points):
    modified_points = []
    
    for point in points:
        x, y, z = point
        
        modified_point = (y, x, z)
        
        modified_points.append(modified_point)
    
    return modified_points

def nav(request,start,destination):
    start=start.lower()
    destination=destination.lower()
    navigator = Graph.MallNavigator()
    navigator.create_connections()
    path = navigator.find_path(start, destination)
    new_path=interchange_coordinates(path)
    average_time = navigator.calculate_average_time(start, destination, average_speed=1.5)

    return JsonResponse({"message":"ok","path":new_path,"average_time":average_time})
