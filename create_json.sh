#!/bin/bash

# Set the path to your image folder
image_folder="./images/portfolio-gallery"

# Check if the folder exists
if [ ! -d "$image_folder" ]; then
    echo "Error: Image folder not found."
    exit 1
fi

# Navigate to the image folder
cd "$image_folder" || exit 1

# Create an array with the names of all images in the folder
image_array=(*)

# Check if there are any images in the folder
if [ ${#image_array[@]} -eq 0 ]; then
    echo "No images found in the folder."
    exit 1
fi

# Create JSON file with image names
json_file="images.json"
echo "[" > "$json_file"

for image in "${image_array[@]}"; do
    echo "  \"$image\"," >> "$json_file"
done

# Remove the trailing comma from the last item
sed -i '$s/,$//' "$json_file"

# Close the JSON array
echo "]" >> "$json_file"

echo "JSON file '$json_file' created with the names of all images."