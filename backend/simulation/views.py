
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .engine import run_simulation

@api_view(['POST'])
def simulate(request):
    sunlight=request.data.get('sunlight')
    water=request.data.get('water')
    days=int(request.data.get('days'))
    return Response(run_simulation(days,sunlight,water))
