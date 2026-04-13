
def simulate_step(growth,sunlight,water):
    health="Healthy"
    if water=="Low" and sunlight=="High":
        growth-=2
        health="Stress"
    elif water=="Medium" and sunlight=="Medium":
        growth+=5
        health="Optimal"
    elif water=="High" and sunlight=="Low":
        growth-=1
        health="Root Rot"
    else:
        growth+=1
    growth=max(growth,0)
    return growth,health

def run_simulation(days,sunlight,water):
    growth=10
    data=[]
    for d in range(1,days+1):
        growth,health=simulate_step(growth,sunlight,water)
        data.append({"day":d,"growth":growth,"health":health})
    return data
