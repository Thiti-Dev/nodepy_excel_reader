import csv
import sys

if len(sys.argv) <2:
    sys.exit()

filename = sys.argv[1]

def run():
    csvfile = open(filename,newline='')
    reader = csv.DictReader(csvfile)
    dict_array = [row for row in reader]
    print(dict_array)

run()