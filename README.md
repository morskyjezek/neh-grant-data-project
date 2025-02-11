# NEH Grant Data Project

This repository illustrates work with humanities data
and picks up on my earlier project (alas no
longer available live on the web), which mapped NEH grant information in
an interactive Google Map. 

## The data

**Data in this collection downloaded as of December 2020.**

This repository explores data made public about NEH grants 
by the National Endowment for the Humanities (NEH), as of
December 2020. The data is provided by NEH, an indepdendent
federal agency established in 1965 to support work in the humanities
across the country. As far as it is possible to tell, the data is
output from the agency's database that manages the intake, review, and
administration of all federal funds awarded by the NEH. This data is
described and provided for download at https://securegrants.neh.gov/open/data/. 
The data is also provided and linked via data.gov at https://catalog.data.gov/dataset?publisher=National+Endowment+for+the+Humanities.
The data is created and published by the US Government and is therefore
not subject to copyright; the data.gov entry offers the data under 
a [CCZero](http://www.opendefinition.org/licenses/cc-zero) license,
which means that it is not subject to copyright restrictions.  

In this repository, I focus on the data made available in `csv` format, 
which I found to be the most friendly for subsequent processing in python. 
This repository contains a series of notebooks that illustrate some 
of the steps that I took in curating this humanities data. 

The data is best described as a listing of 
details about all grants made by the NEH since 1966 until 2019.
While this is a good overall description, I noted during this project
that there are various inconsistencies or errors in the data, and 
in the course of this project to create maps, I filtered out grants
that were given to entities based outside the US. So the information
discussed in this repository does reproduce the basic NEH data

## Demonstrations

### 01. Inventory and metadata

The first notebook ([01-inventory-and-fixity.ipynb](01-inventory-and-fixity.ipynb)) demonstrates how the files were inventoried and 
basic metadata was created. I originally included "fixity" in the title, since 
one of the key metadata that the we add is fixity information in the form of 
cryptographic hashes calculated for each file to provide baseline
information to demonstrate whether any file has changed over time.
The "bagged" files can be viewed in the `neh-grants-data-202012` directory.
Basic metadata included provenance and description 
(see the `neh-grants-data-2020/bag-info.txt` file), 
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

Extracting a list of coordinate points for displaying on a map. 
This notebook demonstrates a process for geolocating the information
in the raw grant data from the previous steps.

#### 02c. Exporting

Export the data as well-formed geojson.

### 03. Mapping the data

Use the cleaned data to create geospatial visualizations of 
the grants. 

#### 03a. Mapping state by state 

This notebook walks through a process to geolocate the grants state-by-state.
The notebook offers tools to filter the data to create different kinds of maps,
and to export maps to files that can be reused in reports.

#### 03b. An interactive US state map (mapping for the web with python?)

TODO: Create a map that shows grants across the country and allows the user to 
click &/or hover over each state to see how many grants & funds went to that state.
This would be a proof-of-concept for extension to view by congressional districts. 

#### 03c. Mapping for the web (with standard web tools like html, css, javascript, and leaflet)

Create an interactive, web-based map that will display the grants
with individual markers on the map, allow a user to zoom and scroll,
and create a popup for each marker that displays information about the
grant.

TODO

### 04. Loading in to cloud provider

This section illustrates loading data into a cloud provider and utilizing
various services to publish the previously curated data. 
In this case we use AWS.

#### 04a. Loading JSON into DynamoDB 

Use a notebook to create a table & load in records.

#### 04b. Loading the archive into S3

Also demo in notebook.

### 05. Sharing the project

Explore various ways to share the project. 

#### 05a. Create a twitter bot

Create a twitter broadcaster to share the information. Like the other twitter bots out there. 