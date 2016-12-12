##Visualization_Project3: Protein Interaction Network Visualization using cBio Portal
Please click to watch the overview video.

[![video](https://cloud.githubusercontent.com/assets/19288804/19246691/37394c84-8eed-11e6-8ad6-2ff0f208e299.jpg)](https://youtu.be/eLRKHjXkJBI)





## Link for my web application is

https://vibhutittu.github.io/Visualization-Project-3/Home.html

In this Project we will work on fetching the protein data from cBioPortal using its web API and display it using some plots/graphs. There are research data of 147 Cancer studies in cBioPortal. Each study comparises of various parameters like mutation count, Genes mutatated, male/female ratio,Diagnosis age, Copy number alterations etc. We reserched on the cancer studies mentioned in cBioPortal to get an idea of the parameters used in each cancer study and then choose the parameters to display using plots/graphs. So we have found the male/female counts for each study and grouped them according to the cancer type. Also we found other parameters like the ethinicity of people in that cancer studies, diagnosis age etc. 

## Data Fetching using the web API

In this project we have fetched the data using cBioPortl web API. We have sent a request to the web portal which includes the url for the clinical data and serever url. The URL fetches the data for each of the 147 cancer studies. We preprocessed the data being fetched to get the required parameters like male/female count, diagnosis age , ethinicity, cancer type etc. This is the challenging part for us in this project since even though the data being fetched extracting the relevant parameters and group them accordingly was challenging.

## Data visualization using different graphs/plots

In this project after extracting the data dynamically, we are visualizing it using scatter plots, pie charts etc. We are sending the web API request every time, a study is being selected and it fetches the required data and display it. For example : we have selected the study "paac_jhu_2014" to get the male,female count and cancer types. Once we select the study, a web API request will be sent to the portal, fetches the data, preprocess it to get the counts and group them according to cancer types., then visualize it using scatter plot. Every time we select a cancer study it performs the same process and visualize.

## Contribution of each team member

1) Vibhuti Gupta(Leader)
 - Researched on the cBioPortal for the cancer studies.
 - Researched to find the parameters suitable to visualize.
 - Worked on the visualization of parameters using different graphs/plots.
 - Worked on the functionalities to automate the process of data fetching and visualization on the page on selecting the cancer study    from drop down list.
 
 
2) Kiran Patrudu(Team Member)
- Worked on the web API for data fetching and wrote scripts to fetch the data from Web API.
- Preprocess the data being fetched to be suitable for the visualization.
- Developed the User Interface for the project.

Above mentioned contributions are only the overview of some of the tasks but we have done the whole project collaboratively by resolving a lot of problems by discussion as we faced during the development of project.So its a team effort.


## Basic Functionalities are shown below along with Screenshots

### Scatter Plot for displaying all male and female count based on cancer types

![p3_gupta_vibhuti](https://cloud.githubusercontent.com/assets/19288804/21096533/f461a3f6-c025-11e6-8c27-df0f640da8ea.jpg)

### Pie Chart showing the male count with the cancer types

![pie_male](https://cloud.githubusercontent.com/assets/19288804/21096562/173abf52-c026-11e6-89a6-ce0d4ab13678.JPG)

### Pie Chart showing the female count with the cancer types

![pie_female](https://cloud.githubusercontent.com/assets/19288804/21096544/06bcc35a-c026-11e6-8846-9164baffa2ed.JPG)

## Softwares required:
Following are the softwares required to run this file,
1) Web browser[Internet Explorer, Mozilla Firefox, Google Chrome]
2) D3 Library[Optional]


## How to run the program:
Following are the steps to run the program,

Open any web browser and type in the url- "https://vibhutittu.github.io/Visualization-Project-3/Home.html" .

## Acknowledgement:

This Project is the project 3 of data visualization course. We acknowledge Dr. Tommy Dang for his valuable support and suggestions for this project. 



