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

The 02 notebook illustrates steps to clean, combine, and transform
the data so that it can be use for further tasks, including
visualizations. 

### 03. Mapping the data

Using the cleaned data, this notebook walks through a process to
geolocate the grants.

### 04. Upload to AWS

How to upload the dataset to AWS (DynamoDB or S3, or both?).

### 05. Mapping and analyzing the data

### 06. Create a twitter broadcaster to share the information

Like the other twitter bots out there. 
