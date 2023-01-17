import csv

def replace_srt_text(csv_file, srt_file, output_file):
    # Open the CSV file and read the contents
    with open(csv_file, 'r') as f:
        reader = csv.reader(f)
        csv_data = {row[0]:row[3] for row in reader}

    # Open the SRT file and read the contents
    with open(srt_file, 'r') as f:
        srt_data = f.readlines()

    # Replace the text in the SRT file
    for i, line in enumerate(srt_data):
        if line.strip().isdigit():
            serial_number = line.strip()
            if serial_number in csv_data:
                srt_data[i+2] = csv_data[serial_number]+'\n'

    # Write the modified SRT file
    with open(output_file, 'w') as f:
        f.writelines(srt_data)

# Example usage
replace_srt_text('subtitle.csv', 'origin.srt', 'output.srt')