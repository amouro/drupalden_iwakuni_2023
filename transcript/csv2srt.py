import csv

def csv_to_srt(csv_file, srt_file):
    # Open the CSV file and read the contents
    with open(csv_file, 'r') as f:
        reader = csv.reader(f)
        data = [row for row in reader]

    # Open the SRT file and write the contents
    with open(srt_file, 'w') as f:
        for i, row in enumerate(data[1:]):
            serial_number = i + 1
            start_time, end_time, text = row[1], row[2], row[3]
            f.write(f"{serial_number}\n{start_time} --> {end_time}\n{text}\n\n")

# Example usage
csv_to_srt('subtitle.csv', 'output.srt')