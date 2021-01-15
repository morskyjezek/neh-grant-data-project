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

Pulling the flattened data from CSVs, checking quality, and then transforming 
using python data objects for export into other formats like JSON.

#### 02b. Transforming

Creating a list of coordinate points for displaying on a map. 

#### 02c. Exporting

Export the data as well-formed geojson.

### 03. Mapping the data

Use the cleaned data to create geospatial visualizations of 
the grants over time. 

#### 03a. Mapping state by state 

This notebook walks through a process to geolocate the grants state-by-state.
The notebook offers tools to filter the data to create different kinds of maps,
and to export maps to files that can be reused in reports.

#### 03b. Mapping dynamically for the web

This notebook walks through a process to geolocate the grants in an
interactive interface that is browsable via the web.

### 04. Loading in to cloud provider

Notebook illustrate loading data into AWS.

#### 04a. Loading JSON into DynamoDB 

Use a notebook to create a table & load in records.

#### 04b. Loading the archive into S3

Also demo in notebook.

### 06. Create a twitter broadcaster to share the information

Like the other twitter bots out there. 
