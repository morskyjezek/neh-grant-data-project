# NEH Grant Data Files

**Data as of December 2020.**

This repository contains all data made public about NEH grants 
by the National Endowment for the Humanities (NEH), as of
December 2020. 

## Activities

### 01. Inventory and metadata

The 01 notebook demonstrates how the files were inventoried and 
basic metadata was created. Basic metadata included provenance and 
description (see the `neh-grants-data-2020/bag-info.txt` file), 
as well as an inventory and fixity information (see 
the `neh-grants-data-2020/manifest-sha256.txt` file)
for each of the original data files. 

### 02. Cleaning and transforming the data

The 02 notebook illustrates steps to clean and transform
the data so that it can be use for further tasks, including
visualizations. 

#### 02a. Cleaning

Pulling the flattened data from CSVs and then reforming it into python data objects for export.

#### 02b. Transforming

Creating a list of geojson points for displaying on a map. 

### 03. Mapping the data

Using the cleaned data, this notebook walks through a process to
geolocate the grants.

### 04. Loading in to cloud provider

Notebook illustrate loading data into AWS.

#### 04a. Loading JSON into DynamoDB 

Use a notebook to create a table & load in records.

#### 04b. Loading the archive into S3

Also demo in notebook.

### 06. Create a twitter broadcaster to share the information

Like the other twitter bots out there. 
