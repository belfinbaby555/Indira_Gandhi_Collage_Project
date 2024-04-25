import networkx as nx
import string
import random

class MallNavigator:

    def __init__(self):
        self.graph = nx.Graph()
        original_width = 350
        original_height = 400

        new_width = 300
        new_height = 490

        width_ratio = new_width / original_width
        height_ratio = new_height / original_height

        data = {
            "porch": (272, 326,0),
            "c1": (265, 232,0),
            "c2":(321, 232,0),
            "c3":(213, 225,0),
            "toilet":(213, 150,0),
            "store":(154, 230,0),
            "library":(152, 193,0),
            "stairs floor 0":(274, 185,0),
            "iedc room":(414, 179,0),
            "micro controller lab":(500, 179,0),
            "sector1":(199, 195,0),
            "security room": (202, 281,0),
            "sector2":(525, 196,0),
            "eee staff room":(525, 196,0),
            "class room floor 0":(525, 196,0),
            "power electronics lab":(349, 215,0),
            "c4":(344, 201,0),  
            "c5": (569, 217,0), 
            "digital lab": (659, 217,0), 
            "c6": (524, 165,0),
            "circuit lab pcb and prototyping lab": (642, 165,0),      
                
               
            
                    
            
        }

        self.data = {}

        for key, value in data.items():
            resized_x = int(value[0] * width_ratio)
            resized_y = int(value[1] * height_ratio)
            self.data[key] = (resized_x, resized_y, value[2])

        for key, value in self.data.items():
            print(f"{key}: {value}")


    def add_location(self, name, x, y, z):
        self.graph.add_node(name, pos=(int(x), int(y), int(z)))

    def add_connection(self, node1, node2):
        self.graph.add_edge(node1, node2)

    def create_connections(self):
        for name, coordinates in self.data.items():
            self.add_location(name, coordinates[0], coordinates[1], coordinates[2])
        self.add_connection("porch", "c1") 
        self.add_connection("porch", "security room")
        self.add_connection("c1", "c2") 
        self.add_connection("c1", "c3") 
        self.add_connection("c3", "store") 
        self.add_connection("c3", "sector1")
        self.add_connection("sector1", "library")
        self.add_connection("sector1", "toilet")
        self.add_connection("sector1", "store")
        self.add_connection("staris floor 0", "iedc room")
        self.add_connection("iedc room", "micro controller lab")
        self.add_connection("micro controller lab", "sector2")
        self.add_connection("sector2", "eee staff room")
        self.add_connection("class room floor 0", "sector2")
        self.add_connection("idec room", "power electronics lab")
        self.add_connection("class room floor 0", "sector2")
        self.add_connection("c4", "power electronics lab")
        self.add_connection("sector2", "power electronics lab")
        self.add_connection("stairs floor 0", "c4")
        self.add_connection("c4", "c2")
        self.add_connection("c5", "sector2")
        self.add_connection("c4", "c2")
        self.add_connection("digital lab", "c5")
        self.add_connection("sector2", "c6")
        self.add_connection("c6","circuit lab pcb and prototyping lab")

        
        


       


        

        
 
 





        


        
            
    
    def find_shortest_path(self, start, destination):
        shortest_path_nodes = nx.dijkstra_path(self.graph, start, destination)
        shortest_path_coordinates = [tuple(self.graph.nodes[node]['pos']) for node in shortest_path_nodes]
        return shortest_path_coordinates

    def find_path(self, start, destination):
        shortest_path = self.find_shortest_path(start, destination)
        return shortest_path

    def calculate_average_time(self, start, destination, average_speed):
        shortest_path = self.find_path(start, destination)
        total_distance = 0
        for i in range(len(shortest_path) - 1):
            current_pos = shortest_path[i]
            next_pos = shortest_path[i + 1]
            distance = ((next_pos[0] - current_pos[0]) ** 2 +
                        (next_pos[1] - current_pos[1]) ** 2 +
                        (next_pos[2] - current_pos[2]) ** 2) ** 0.5
            total_distance += distance

        average_time = total_distance / average_speed
        return average_time


# Example usage:
'''
navigator = MallNavigator()
navigator.create_connections()
start_location = "Entrance Hall"
end_location = "Data Center"
path = navigator.find_path(start_location, end_location)
average_time = navigator.calculate_average_time(start_location, end_location, average_speed=1.5)
print("Shortest Path:", path)
print("Estimated Average Time:", average_time)
'''