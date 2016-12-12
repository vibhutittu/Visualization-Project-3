var cBioPortalData = {};
var studyIds = ["paac_jhu_2014","laml_tcga_pub","laml_tcga","acyc_mskcc","acc_tcga","blca_mskcc_solit_2014","blca_mskcc_solit_2012","blca_mskcc_signet_ring_impact","blca_plasmacytoid_mskcc_2016","blca_bgi","blca_dfarber_mskcc_2014","blca_tcga_pub","blca_tcga","lgg_tcga","brca_bccrc","brca_broad","brca_sanger","brca_tcga_pub2015","brca_tcga_pub","brca_tcga","brca_bccrc_xenograft_2014","cellline_ccle_broad","cesc_tcga","chol_nccs_2013","chol_nus_2012","chol_tcga","ccrcc_utokyo_2013","coadread_genentech","coadread_tcga_pub","coadread_tcga","coadread_mskcc","cscc_dfarber_2015","desm_broad_2015","esca_broad","esca_tcga","escc_icgc","escc_ucla_2014","es_iocurie_2014","gbc_shanghai_2014","egc_tmucih_2015","gbm_tcga_pub2013","gbm_tcga_pub","gbm_tcga","hnsc_broad","hnsc_jhu","hnsc_tcga_pub","hnsc_tcga","all_stjude_2015","chol_jhu_2013","kich_tcga_pub","kich_tcga","kirc_bgi","kirc_tcga_pub","kirc_tcga","kirp_tcga","lihc_amc_prv","lihc_riken","lihc_tcga","lgg_ucsf_2014","luad_broad","luad_mskcc_2015","luad_tcga_pub","luad_tcga","luad_tsp","lusc_tcga_pub","lusc_tcga","dlbc_tcga","mpnst_mskcc","mbl_broad_2012","mbl_icgc","mbl_pcgp","skcm_broad_dfarber","lgggbm_tcga_pub","meso_tcga","prad_su2c_2015","mm_broad","ccrcc_irc_2014","cellline_nci60","npc_nusingapore","nbl_amc_2012","nepc_wcm","ov_tcga_pub","ov_tcga","paad_icgc","paad_tcga","paad_utsw_2015","panet_jhu_2011","thca_tcga_pub","es_dfarber_broad_2014","pcpg_tcga","thyroid_mskcc_2016","pcnsl_mayo_2015","prad_broad_2013","prad_broad","prad_mskcc","prad_fhcrc","prad_tcga_pub","prad_tcga","prad_mskcc_2014","prad_mskcc_cheny1_organoids_2014","prad_mich","nccrcc_genentech_2014","rms_nih_2014","sarc_mskcc","sarc_tcga","skcm_broad","skcm_tcga","skcm_yale","scco_mskcc","sclc_clcgp","sclc_jhu","sclc_ucologne_2015","stad_pfizer_uhongkong","stad_tcga_pub","stad_tcga","stad_utokyo","stad_uhongkong","tgct_tcga","tet_nci_2014","thym_tcga","thca_tcga","ucs_jhu_2014","ucs_tcga","ucec_tcga","ucec_tcga_pub","uvm_tcga"];

var profileIds = ["_mutations","_gistic"];
var profileDefaultProperty = ["# DATA_TYPE	 Mutations","# DATA_TYPE	Putative copy-number alterations from GISTIC"];
var studyNames = ["Acinar Cell Carcinoma of the Pancreas (Johns Hopkins, J Pathol 2014)","Acute Myeloid Leukemia (TCGA, NEJM 2013)","Acute Myeloid Leukemia (TCGA, Provisional)","Adenoid Cystic Carcinoma (MSKCC, Nat Genet 2013)","Adrenocortical Carcinoma (TCGA, Provisional)","Bladder Cancer (MSKCC, Eur Urol 2014)","Bladder Cancer (MSKCC, J Clin Oncol 2013)","Bladder Cancer, Plasmacytoid Variant (MSKCC, Nat Genet 2016)","Bladder Cancer, Plasmacytoid Variant (MSKCC, Nat Genet 2016)","Bladder Urothelial Carcinoma (BGI, Nat Genet 2013)","Bladder Urothelial Carcinoma (Dana Farber & MSKCC, Cancer Discovery 2014)","Bladder Urothelial Carcinoma (TCGA, Nature 2014)","Bladder Urothelial Carcinoma (TCGA, Provisional)","Brain Lower Grade Glioma (TCGA, Provisional)","Breast Invasive Carcinoma (British Columbia, Nature 2012)","Breast Invasive Carcinoma (Broad, Nature 2012)","Breast Invasive Carcinoma (Sanger, Nature 2012)","Breast Invasive Carcinoma (TCGA, Cell 2015)","Breast Invasive Carcinoma (TCGA, Nature 2012)","Breast Invasive Carcinoma (TCGA, Provisional)","Breast cancer patient xenografts (British Columbia, Nature 2014)","Cancer Cell Line Encyclopedia (Novartis/Broad, Nature 2012)","Cervical Squamous Cell Carcinoma and Endocervical Adenocarcinoma (TCGA, Provisional)","Cholangiocarcinoma (National Cancer Centre of Singapore, Nat Genet 2013)","Cholangiocarcinoma (National University of Singapore, Nat Genet 2012)","Cholangiocarcinoma (TCGA, Provisional)","Clear Cell Renal Cell Carcinoma (U Tokyo, Nat Genet 2013)","Colorectal Adenocarcinoma (Genentech, Nature 2012)","Colorectal Adenocarcinoma (TCGA, Nature 2012)","Colorectal Adenocarcinoma (TCGA, Provisional)","Colorectal Adenocarcinoma Triplets (MSKCC, Genome Biology 2014)","Cutaneous squamous cell carcinoma (DFCI, Clin Cancer Res 2015)","Desmoplastic Melanoma (Broad Institute, Nat Genet 2015)","Esophageal Adenocarcinoma (Broad, Nat Genet 2013)","Esophageal Carcinoma (TCGA, Provisional)","Esophageal Squamous Cell Carcinoma (ICGC, Nature 2014)","Esophageal Squamous Cell Carcinoma (UCLA, Nat Genet 2014)","Ewing Sarcoma (Institut Cuire, Cancer Discov 2014)","Gallbladder Carcinoma (Shanghai, Nat Genet 2014)","Gastric Adenocarcinoma (TMUCIH, PNAS 2015)","Glioblastoma (TCGA, Cell 2013)","Glioblastoma (TCGA, Nature 2008)","Glioblastoma Multiforme (TCGA, Provisional)","Head and Neck Squamous Cell Carcinoma (Broad, Science 2011)","Head and Neck Squamous Cell Carcinoma (Johns Hopkins, Science 2011)","Head and Neck Squamous Cell Carcinoma (TCGA, Nature 2015)","Head and Neck Squamous Cell Carcinoma (TCGA, Provisional)","Infant MLL-Rearranged Acute Lymphoblastic Leukemia (St Jude, Nat Genet 2015)","Intrahepatic Cholangiocarcinoma (Johns Hopkins University, Nat Genet 2013)","Kidney Chromophobe (TCGA, Cancer Cell 2014)","Kidney Chromophobe (TCGA, Provisional)","Kidney Renal Clear Cell Carcinoma (BGI, Nat Genet 2012)","Kidney Renal Clear Cell Carcinoma (TCGA, Nature 2013)","Kidney Renal Clear Cell Carcinoma (TCGA, Provisional)","Kidney Renal Papillary Cell Carcinoma (TCGA, Provisional)","Liver Hepatocellular Carcinoma (AMC, Hepatology 2014)","Liver Hepatocellular Carcinoma (RIKEN, Nat Genet 2012)","Liver Hepatocellular Carcinoma (TCGA, Provisional)","Low-Grade Gliomas (UCSF, Science 2014)","Lung Adenocarcinoma (Broad, Cell 2012)","Lung Adenocarcinoma (MSKCC 2015)","Lung Adenocarcinoma (TCGA, Nature 2014)","Lung Adenocarcinoma (TCGA, Provisional)","Lung Adenocarcinoma (TSP, Nature 2008)","Lung Squamous Cell Carcinoma (TCGA, Nature 2012)","Lung Squamous Cell Carcinoma (TCGA, Provisional)","Lymphoid Neoplasm Diffuse Large B-cell Lymphoma (TCGA, Provisional)","Malignant Peripheral Nerve Sheath Tumor (MSKCC, Nat Genet 2014)","Medulloblastoma (Broad, Nature 2012)","Medulloblastoma (ICGC, Nature 2012)","Medulloblastoma (PCGP, Nature 2012)","Melanoma (Broad/Dana Farber, Nature 2012)","Merged Cohort of LGG and GBM (TCGA, 2016)","Mesothelioma (TCGA, Provisional)","Metastatic Prostate Cancer, SU2C/PCF Dream Team (Robinson et al., Cell 2015)","Multiple Myeloma (Broad, Cancer Cell 2014)","Multiregion Sequencing of Clear Cell Renal Cell Carcinoma (IRC, Nat Genet 2014)","NCI-60 Cell Lines (NCI, Cancer Res. 2012)","Nasopharyngeal Carcinoma (Singapore, Nat Genet 2014)","Neuroblastoma (AMC Amsterdam, Nature 2012)","Neuroendocrine Prostate Cancer (Trento/Cornell/Broad 2016)","Ovarian Serous Cystadenocarcinoma (TCGA, Nature 2011)","Ovarian Serous Cystadenocarcinoma (TCGA, Provisional)","Pancreatic Adenocarcinoma (ICGC, Nature 2012)","Pancreatic Adenocarcinoma (TCGA, Provisional)","Pancreatic Cancer (UTSW, Nat Commun 2015)","Pancreatic Neuroendocrine Tumors (Johns Hopkins University, Science 2011)","Papillary Thyroid Carcinoma (TCGA, Cell 2014)","Pediatric Ewing Sarcoma (DFCI, Cancer Discov 2014)","Pheochromocytoma and Paraganglioma (TCGA, Provisional)","Poorly-Differentiated and Anaplastic Thyroid Cancers (MSKCC, JCI 2016)","Primary Central Nervous System Lymphoma (Mayo Clinic, Clin Cancer Res 2015)","Prostate Adenocarcinoma (Broad/Cornell, Cell 2013)","Prostate Adenocarcinoma (Broad/Cornell, Nat Genet 2012)","Prostate Adenocarcinoma (MSKCC, Cancer Cell 2010)","Prostate Adenocarcinoma (Nelson Lab, Fred Hutchinson CRC)","Prostate Adenocarcinoma (TCGA, Cell 2015)","Prostate Adenocarcinoma (TCGA, Provisional)","Prostate Adenocarcinoma CNA study (MSKCC, PNAS 2014)","Prostate Adenocarcinoma Organoids (MSKCC, Cell 2014)","Prostate Adenocarcinoma, Metastatic (Michigan, Nature 2012)","Renal Non-Clear Cell Carcinoma (Genentech, Nat Genet 2014)","Rhabdomyosarcoma (NIH, Cancer Discov 2014)","Sarcoma (MSKCC/Broad, Nat Genet 2010)","Sarcoma (TCGA, Provisional)","Skin Cutaneous Melanoma (Broad, Cell 2012)","Skin Cutaneous Melanoma (TCGA, Provisional)","Skin Cutaneous Melanoma (Yale, Nat Genet 2012)","Small Cell Carcinoma of the Ovary (MSKCC, Nat Genet 2014)","Small Cell Lung Cancer (CLCGP, Nat Genet 2012)","Small Cell Lung Cancer (Johns Hopkins, Nat Genet 2012)","Small Cell Lung Cancer (U Cologne, Nature 2015)","Stomach Adenocarcinoma (Pfizer and UHK, Nat Genet 2014)","Stomach Adenocarcinoma (TCGA, Nature 2014)","Stomach Adenocarcinoma (TCGA, Provisional)","Stomach Adenocarcinoma (U Tokyo, Nat Genet 2014)","Stomach Adenocarcinoma (UHK, Nat Genet 2011)","Testicular Germ Cell Cancer (TCGA, Provisional)","Thymic Epithelial Tumors (NCI, Nat Genet 2014)","Thymoma (TCGA, Provisional)","Thyroid Carcinoma (TCGA, Provisional)","Uterine Carcinosarcoma (Johns Hopkins University, Nat Commun 2014)","Uterine Carcinosarcoma (TCGA, Provisional)","Uterine Corpus Endometrial Carcinoma (TCGA, Provisional)","Uterine Corpus Endometrioid Carcinoma (TCGA, Nature 2013)","Uveal Melanoma (TCGA, Provisional)"];
var Obj_Fetch={}
var temp_counter=0;

var case_id_count=0;
var cancer_type_count=0;
var male_count=0;
var female_count=0;
var days_to_collection_count=0;
var days_to_death_count=0;
var days_to_initial_pathologic_diagnosis_count=0;  

var hispano_latino_count=0;
var not_hispano_latino_count=0;

var case_id_value=0;
var cancer_type_val=0;
var cancer_type_detailed_val=0;
var ethnicity_val=0;

var data=[];
var fetch_data_array=[];
var fetch_data_array=[];
var processDone=false;
var SID;
var stdID;

function clearGraph() {
	d3.selectAll("svg > *").remove();
	
}

function setGraph() {
	d3.selectAll("svg > *").remove();
	Fetch_from_Data_Set($('#sid').val());
	getResult();
	
}

function AllGraph() {
	Fetch_All_from_Data_Set();
	getAllResult();
	
}

function DetailedAllGraph() {
	Fetch_from_Data_Set_Detailed();
	getResultDetailed();
	
}

function MaleGraph() {
	Fetch_All_from_Data_Set();
	getResultMale();
	
}


function FemaleGraph() {
	Fetch_All_from_Data_Set();
	getResultFemale();
	
}

//Method for getting values from API and drawing pie chart for male count for all cancer studies
function getResultMale(){
	
	$('svg').remove();
	if (processDone) {
           
		  for(var key in Obj_Fetch)
						{
						var temp_var={};
						temp_var.cancertype=key;
						temp_var.male=Obj_Fetch[key].MALE;
						temp_var.female=Obj_Fetch[key].FEMALE;
						fetch_data_array.push(temp_var);
						
						}
						addPieChart_male(fetch_data_array);
						console.log(fetch_data_array);

      } else {
           setTimeout(getResultMale, 250);
      }
 }
 
//Method for getting values from API and drawing pie chart for female count for all cancer studies
function getResultFemale(){
	
	$('svg').remove();
	if (processDone) {
           
		  for(var key in Obj_Fetch)
						{
						var temp_var={};
						temp_var.cancertype=key;
						temp_var.male=Obj_Fetch[key].MALE;
						temp_var.female=Obj_Fetch[key].FEMALE;
						fetch_data_array.push(temp_var);
						
						}
						addPieChart_female(fetch_data_array);
						
		    } else {
           setTimeout(getResultFemale, 250);
      }
 }



//Method for getting values from API and drawing scatter plot for each cancer study
function getResult(){
	
	d3.select("svg").remove();
	if (processDone) {
           //return some variables
		  
		  for(var key in Obj_Fetch)
						{
						var temp_var={};
						temp_var.cancertype=key;
						temp_var.male=Obj_Fetch[key].MALE;
						temp_var.female=Obj_Fetch[key].FEMALE;
						fetch_data_array.push(temp_var);
						
						}
						addScatterPlot(fetch_data_array);
						console.log(fetch_data_array);

      } else {
           setTimeout(getResult, 250);
      }
 }
 
 //Method for getting values from API and drawing scatter plot for all cancer studies
 function getAllResult(){
	
	if (processDone) {
           for(var key in Obj_Fetch)
						{
						var temp_var={};
						temp_var.cancertype=key;
						temp_var.male=Obj_Fetch[key].MALE;
						temp_var.female=Obj_Fetch[key].FEMALE;
						fetch_data_array.push(temp_var);
						
						}
						addAllScatterPlot(fetch_data_array);
						
      } else {
           setTimeout(getResult, 250);
      }
 }
 
//Method for getting values from API and drawing scatter plot for all cancer studies detailed
 function getResultDetailed(){
	
	if (processDone) {
           
		 for(var key in Obj_Fetch)
						{
						var temp_var={};
						temp_var.cancertypedetailed=key;
						temp_var.male=Obj_Fetch[key].MALE;
						temp_var.female=Obj_Fetch[key].FEMALE;
						fetch_data_array.push(temp_var);
						
						}
						addScatterPlotDetailed(fetch_data_array);
						console.log(fetch_data_array);

      } else {
           setTimeout(getResult, 250);
      }
 }
 
//Fetch the data from cBioportal web API for each cancer study
Fetch_from_Data_Set(stdID);
function Fetch_from_Data_Set(stdID)
{
	
	for (var p=0;p<profileIds.length;p++){  
  				for (var i=0;i<studyIds.length;i++){  
				var strServer = "http://www.cbioportal.org/webservice.do?";	
				// Profile blca_tcga_pub_gistic  blca_tcga_pub_mutations
				var tmp=stdID;
				var study = tmp;
				var profile = profileIds[p];
				var request = "cmd=getClinicalData&case_set_id="+study+"_all"
				
				var str2 = strServer+request;
				(function(request,i,p) { 	
					d3.csv(str2, function(error, json) {
						temp_counter++
						processDone=true
						if (error) {
							console.warn("warn: "+error);
							
							return;
						}	
					})
					.get()
					.on('load', function(d) {					
						for(var i=0;i<d.length;i++)
						{
							for( key in d[i])
							{
								var days_to_death=key.split("	").indexOf("DAYS_TO_DEATH")
								var gender=key.split("	").indexOf("GENDER")
								var sex=key.split("	").indexOf("SEX")
								var final_obj={cancer_type : "",MALE : "",Female : ""}
								
								if(gender>=0)
								{
									var column_value=d[i][key].split("	")[""||gender];
									cur_row_value=d[i][key].split("	")[key.split("	").indexOf("CANCER_TYPE")];
									if(column_value=="M" || column_value=="MALE")
									{
										
										var cur_row_value=d[i][key].split("	")[key.split("	").indexOf("CANCER_TYPE")];
										if(Obj_Fetch[cur_row_value]== undefined)
										{
											Obj_Fetch[cur_row_value]=[];
											Obj_Fetch[cur_row_value]["FEMALE"]=0;											
											Obj_Fetch[cur_row_value]["MALE"]=0;	
											
										}
										
										Obj_Fetch[cur_row_value]["MALE"]=parseInt(Obj_Fetch[cur_row_value]["MALE"])+1;
										
									}
									else if(column_value=="F" || column_value=="FEMALE")
									{
										var cur_row_value=d[i][key].split("	")[key.split("	").indexOf("CANCER_TYPE")];
										if(Obj_Fetch[cur_row_value]== undefined)
										{
											Obj_Fetch[cur_row_value]=[];
											Obj_Fetch[cur_row_value]["FEMALE"]=0;											
											Obj_Fetch[cur_row_value]["MALE"]=0;										
											
										}
										Obj_Fetch[cur_row_value]["FEMALE"]=parseInt(Obj_Fetch[cur_row_value]["FEMALE"])+1;
										
									}
								}
								else if(sex>=0)
								{
									var cur_row_value=d[i][key].split("	")[key.split("	").indexOf("CANCER_TYPE")];
									var column_value=d[i][key].split("	")[sex];
									if(column_value=="M" || column_value=="MALE")
									{
										
										if(Obj_Fetch[cur_row_value]== undefined)
										{
											Obj_Fetch[cur_row_value]=[];
											Obj_Fetch[cur_row_value]["MALE"]=0;
											Obj_Fetch[cur_row_value]["FEMALE"]=0;
											
											
										}
										
										Obj_Fetch[cur_row_value]["MALE"]=parseInt(Obj_Fetch[cur_row_value]["MALE"])+1;
										
										
									}
									else if(column_value=="F" || column_value=="FEMALE")
									{
										var cur_row_value=d[i][key].split("	")[key.split("	").indexOf("CANCER_TYPE")];
										if(Obj_Fetch[cur_row_value]== undefined)
										{
											Obj_Fetch[cur_row_value]=[];
											Obj_Fetch[cur_row_value]["FEMALE"]=0;											
											Obj_Fetch[cur_row_value]["MALE"]=0;											
											
										}
										
										Obj_Fetch[cur_row_value]["FEMALE"]=parseInt(Obj_Fetch[cur_row_value]["FEMALE"])+1;
										
									}
										
								}
								
							
							}
							
						}
						temp_counter++
						if(temp_counter==(studyIds.length*2)){
						processDone=true
						}
						var i=0;
						}
											
					);  
					})(request,i,p);
			} 
			if(p==profileIds.length-1){
		
			}
		}
	
	
	}
	
//Fetch the data from cBioportal web API for all cancer studies	
function Fetch_All_from_Data_Set()
{
	for (var p=0;p<profileIds.length;p++){  
  				for (var i=0;i<studyIds.length;i++){  
				var strServer = "http://www.cbioportal.org/webservice.do?";	
				var study = studyIds[i];
				var profile = profileIds[p];
				var request = "cmd=getClinicalData&case_set_id="+study+"_all"
				 
				var str2 = strServer+request;
				(function(request,i,p) { 	
					d3.csv(str2, function(error, json) {
						temp_counter++
						processDone=true
						if (error) {
							console.warn("warn: "+error);
							
							return;
						}	
					})
					.get()
					.on('load', function(d) {					
						for(var i=0;i<d.length;i++)
						{
							for( key in d[i])
							{
								var days_to_death=key.split("	").indexOf("DAYS_TO_DEATH")
								var gender=key.split("	").indexOf("GENDER")
								var sex=key.split("	").indexOf("SEX")
								var final_obj={cancer_type : "",MALE : "",Female : ""}
								
								if(gender>=0)
								{
									var column_value=d[i][key].split("	")[""||gender];
									cur_row_value=d[i][key].split("	")[key.split("	").indexOf("CANCER_TYPE")];
									if(column_value=="M" || column_value=="MALE")
									{
										
										
										var cur_row_value=d[i][key].split("	")[key.split("	").indexOf("CANCER_TYPE")];
										if(Obj_Fetch[cur_row_value]== undefined)
										{
											Obj_Fetch[cur_row_value]=[];
											Obj_Fetch[cur_row_value]["FEMALE"]=0;											
											Obj_Fetch[cur_row_value]["MALE"]=0;	
											
										}
										
										Obj_Fetch[cur_row_value]["MALE"]=parseInt(Obj_Fetch[cur_row_value]["MALE"])+1;
										
									}
									else if(column_value=="F" || column_value=="FEMALE")
									{
										var cur_row_value=d[i][key].split("	")[key.split("	").indexOf("CANCER_TYPE")];
										if(Obj_Fetch[cur_row_value]== undefined)
										{
											Obj_Fetch[cur_row_value]=[];
											Obj_Fetch[cur_row_value]["FEMALE"]=0;											
											Obj_Fetch[cur_row_value]["MALE"]=0;										
											
										}
										Obj_Fetch[cur_row_value]["FEMALE"]=parseInt(Obj_Fetch[cur_row_value]["FEMALE"])+1;
										
									}
								}
								else if(sex>=0)
								{
									var cur_row_value=d[i][key].split("	")[key.split("	").indexOf("CANCER_TYPE")];
									var column_value=d[i][key].split("	")[sex];
									if(column_value=="M" || column_value=="MALE")
									{
										
										if(Obj_Fetch[cur_row_value]== undefined)
										{
											Obj_Fetch[cur_row_value]=[];
											Obj_Fetch[cur_row_value]["MALE"]=0;
											Obj_Fetch[cur_row_value]["FEMALE"]=0;
											
											
										}
										
										Obj_Fetch[cur_row_value]["MALE"]=parseInt(Obj_Fetch[cur_row_value]["MALE"])+1;
										
										
									}
									else if(column_value=="F" || column_value=="FEMALE")
									{
										var cur_row_value=d[i][key].split("	")[key.split("	").indexOf("CANCER_TYPE")];
										if(Obj_Fetch[cur_row_value]== undefined)
										{
											Obj_Fetch[cur_row_value]=[];
											Obj_Fetch[cur_row_value]["FEMALE"]=0;											
											Obj_Fetch[cur_row_value]["MALE"]=0;											
											
										}
										
										Obj_Fetch[cur_row_value]["FEMALE"]=parseInt(Obj_Fetch[cur_row_value]["FEMALE"])+1;
										
									}
										
								}
								
							
							}
							
						}
						temp_counter++
						if(temp_counter==(studyIds.length*2)){
						processDone=true
						}
						var i=0;
						}
											
					);  
					})(request,i,p);
			} 
			if(p==profileIds.length-1){
		
			}
		}
	
	
	}
	

//Fetch the data from cBioportal web API for each cancer study detailed	
function Fetch_from_Data_Set_Detailed()
{
	for (var p=0;p<profileIds.length;p++){  
  				for (var i=0;i<studyIds.length;i++){  
				var strServer = "http://www.cbioportal.org/webservice.do?";	
				var study = studyIds[i];
				var profile = profileIds[p];
				var request = "cmd=getClinicalData&case_set_id="+study+"_all"
				var str2 = strServer+request;
				(function(request,i,p) { 	
					d3.csv(str2, function(error, json) {
						temp_counter++
						processDone=true
						
						if (error) {
							console.warn("warn: "+error);
							
							return;
						}	
					})
					.get()
					.on('load', function(d) {					
						for(var i=0;i<d.length;i++)
						{
							for( key in d[i])
							{
								var days_to_death=key.split("	").indexOf("DAYS_TO_DEATH")
								var gender=key.split("	").indexOf("GENDER")
								var sex=key.split("	").indexOf("SEX")
								
								var final_obj={cancer_type_detailed : "",MALE : "",Female : ""}
								
								if(gender>=0)
								{
									var column_value=d[i][key].split("	")[""||gender];
									cur_row_value=d[i][key].split("	")[key.split("	").indexOf("CANCER_TYPE_DETAILED")];
									if(column_value=="M" || column_value=="MALE")
									{
										
										
										var cur_row_value=d[i][key].split("	")[key.split("	").indexOf("CANCER_TYPE_DETAILED")];
										if(Obj_Fetch[cur_row_value]== undefined)
										{
											Obj_Fetch[cur_row_value]=[];
											Obj_Fetch[cur_row_value]["FEMALE"]=0;											
											Obj_Fetch[cur_row_value]["MALE"]=0;	
											
										}
										
										Obj_Fetch[cur_row_value]["MALE"]=parseInt(Obj_Fetch[cur_row_value]["MALE"])+1;
										
									}
									else if(column_value=="F" || column_value=="FEMALE")
									{
										var cur_row_value=d[i][key].split("	")[key.split("	").indexOf("CANCER_TYPE_DETAILED")];
										if(Obj_Fetch[cur_row_value]== undefined)
										{
											Obj_Fetch[cur_row_value]=[];
											Obj_Fetch[cur_row_value]["FEMALE"]=0;											
											Obj_Fetch[cur_row_value]["MALE"]=0;										
											
										}
										Obj_Fetch[cur_row_value]["FEMALE"]=parseInt(Obj_Fetch[cur_row_value]["FEMALE"])+1;
										
									}
								}
								else if(sex>=0)
								{
									var cur_row_value=d[i][key].split("	")[key.split("	").indexOf("CANCER_TYPE_DETAILED")];
									var column_value=d[i][key].split("	")[sex];
									if(column_value=="M" || column_value=="MALE")
									{
										
										if(Obj_Fetch[cur_row_value]== undefined)
										{
											Obj_Fetch[cur_row_value]=[];
											Obj_Fetch[cur_row_value]["MALE"]=0;
											Obj_Fetch[cur_row_value]["FEMALE"]=0;
											
											
										}
										
										Obj_Fetch[cur_row_value]["MALE"]=parseInt(Obj_Fetch[cur_row_value]["MALE"])+1;
										
										
									}
									else if(column_value=="F" || column_value=="FEMALE")
									{
										var cur_row_value=d[i][key].split("	")[key.split("	").indexOf("CANCER_TYPE_DETAILED")];
										if(Obj_Fetch[cur_row_value]== undefined)
										{
											Obj_Fetch[cur_row_value]=[];
											Obj_Fetch[cur_row_value]["FEMALE"]=0;											
											Obj_Fetch[cur_row_value]["MALE"]=0;											
											
										}
										
										Obj_Fetch[cur_row_value]["FEMALE"]=parseInt(Obj_Fetch[cur_row_value]["FEMALE"])+1;
										
									}
										
								}
								
							
							}
							
						}
						temp_counter++
						if(temp_counter==(studyIds.length*2)){
						processDone=true
						}
						var i=0;
						}
											
					);  
					})(request,i,p);
			} 
			if(p==profileIds.length-1){
		
			}
		}
	}
	
//Draw the scatter plot for each cancer study
function addScatterPlot(fetch_data_array){
	
var margin = {top: 20, right: 20, bottom: 30, left: 80},
    width = 1200 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

/* 
 * value accessor - returns the value to encode for a given data object.
 * scale - maps value to a visual display encoding, such as a pixel position.
 * map function - maps from data value to display value
 * axis - sets up axis
 */


// setup x 
var xValue = function(d) { return d.male;}, // data -> value
    xScale = d3.scale.linear().range([0, width]), // value -> display
    xMap = function(d) { return xScale(xValue(d));}, // data -> display
    xAxis = d3.svg.axis().scale(xScale).orient("bottom");
	
// setup y
var yValue = function(d) { return d.female;}, // data -> value
    yScale = d3.scale.linear().range([height, 0]), // value -> display
    yMap = function(d) { return yScale(yValue(d));}, // data -> display
    yAxis = d3.svg.axis().scale(yScale).orient("left");
	
	// setup fill color
var cValue = function(d) { return d.cancertype;},
    color = d3.scale.category10();
	
// add the graph canvas to the body of the webpage
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// add the tooltip area to the webpage
var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

	//Fetch the data 
 fetch_data_array.forEach(function(d) {
	d.male = +d.male;
    d.female = +d.female;
	
});

 // don't want dots overlapping axis, so add in buffer to data domain
  xScale.domain([d3.min(fetch_data_array, xValue)-1, d3.max(fetch_data_array, xValue)+1]);
  yScale.domain([d3.min(fetch_data_array, yValue)-1, d3.max(fetch_data_array, yValue)+1]); 

  // x-axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("Male Count");
	  
	  // y-axis
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Female Count");
  
// draw dots
  svg.selectAll(".dot")
      .data(fetch_data_array)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 6.5)
      .attr("cx", xMap)
      .attr("cy", yMap)
      .style("fill", function(d) { return color(cValue(d));}) 
      .on("mouseover", function(d) {
          tooltip.transition()
               .duration(200)
               .style("opacity", .9);
          tooltip.html(d["cancertype"] + "<br/> (" + xValue(d) 
	        + ", " + yValue(d) + ")")
               .style("left", (d3.event.pageX + 5) + "px")
               .style("top", (d3.event.pageY - 28) + "px");
      })
      .on("mouseout", function(d) {
          tooltip.transition()
               .duration(500)
               .style("opacity", 0);
      });

// draw legend
  var legend = svg.selectAll(".legend")
      .data(color.domain())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  // draw legend colored rectangles
  legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

  // draw legend text
  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d;})

}


//Draw the scatter plot for all cancer studies
function addAllScatterPlot(fetch_data_array){
	
var margin = {top: 20, right: 20, bottom: 30, left: 80},
    width = 1200 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;

/* 
 * value accessor - returns the value to encode for a given data object.
 * scale - maps value to a visual display encoding, such as a pixel position.
 * map function - maps from data value to display value
 * axis - sets up axis
 */



// setup x 
var xValue = function(d) { return d.male;}, // data -> value
    xScale = d3.scale.linear().range([0, width]), // value -> display
    xMap = function(d) { return xScale(xValue(d));}, // data -> display
    xAxis = d3.svg.axis().scale(xScale).orient("bottom");
	
// setup y
var yValue = function(d) { return d.female;}, // data -> value
    yScale = d3.scale.linear().range([height, 0]), // value -> display
    yMap = function(d) { return yScale(yValue(d));}, // data -> display
    yAxis = d3.svg.axis().scale(yScale).orient("left");
	
	// setup fill color
var cValue = function(d) { return d.cancertype;},
    color = d3.scale.category10();
	
// add the graph canvas to the body of the webpage
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	// add the tooltip area to the webpage
var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

 fetch_data_array.forEach(function(d) {
	d.male = +d.male;
    d.female = +d.female;
	
});

 // don't want dots overlapping axis, so add in buffer to data domain
  xScale.domain([d3.min(fetch_data_array, xValue)-1, d3.max(fetch_data_array, xValue)+1]);
  yScale.domain([d3.min(fetch_data_array, yValue)-1, d3.max(fetch_data_array, yValue)+1]); 

  // x-axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("Male Count");
	  
	  // y-axis
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Female Count");
  
// draw dots
  svg.selectAll(".dot")
      .data(fetch_data_array)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 6.5)
      .attr("cx", xMap)
      .attr("cy", yMap)
      .style("fill", function(d) { return color(cValue(d));}) 
      .on("mouseover", function(d) {
          tooltip.transition()
               .duration(200)
               .style("opacity", .9);
          tooltip.html(d["cancertype"] + "<br/> (" + xValue(d) 
	        + ", " + yValue(d) + ")")
               .style("left", (d3.event.pageX + 5) + "px")
               .style("top", (d3.event.pageY - 28) + "px");
      })
      .on("mouseout", function(d) {
          tooltip.transition()
               .duration(500)
               .style("opacity", 0);
      });

// draw legend
  var legend = svg.selectAll(".legend")
      .data(color.domain())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  // draw legend colored rectangles
  legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

  // draw legend text
  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d;})
	  
	//d3.select("svg").remove();

}



//Draw the scatter plot for cancer type detailed
function addScatterPlotDetailed(fetch_data_array){
	
var margin = {top: 20, right: 20, bottom: 30, left: 80},
    width = 1200 - margin.left - margin.right,
    height = 1800 - margin.top - margin.bottom;

/* 
 * value accessor - returns the value to encode for a given data object.
 * scale - maps value to a visual display encoding, such as a pixel position.
 * map function - maps from data value to display value
 * axis - sets up axis
 */



// setup x 
var xValue = function(d) { return d.male;}, // data -> value
    xScale = d3.scale.linear().range([0, width]), // value -> display
    xMap = function(d) { return xScale(xValue(d));}, // data -> display
    xAxis = d3.svg.axis().scale(xScale).orient("bottom");
	
// setup y
var yValue = function(d) { return d.female;}, // data -> value
    yScale = d3.scale.linear().range([height, 0]), // value -> display
    yMap = function(d) { return yScale(yValue(d));}, // data -> display
    yAxis = d3.svg.axis().scale(yScale).orient("left");
	
	// setup fill color
var cValue = function(d) { return d.cancertypedetailed;},
    color = d3.scale.category10();
	
// add the graph canvas to the body of the webpage

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	

	// add the tooltip area to the webpage
var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

 fetch_data_array.forEach(function(d) {
	d.male = +d.male;
    d.female = +d.female;
	
});


 // don't want dots overlapping axis, so add in buffer to data domain
  xScale.domain([d3.min(fetch_data_array, xValue)-1, d3.max(fetch_data_array, xValue)+1]);
  yScale.domain([d3.min(fetch_data_array, yValue)-1, d3.max(fetch_data_array, yValue)+1]); 

  // x-axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("Male Count");
	  
	  // y-axis
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 66)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Female Count");
  
// draw dots
  svg.selectAll(".dot")
      .data(fetch_data_array)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 6.5)
      .attr("cx", xMap)
      .attr("cy", yMap)
      .style("fill", function(d) { return color(cValue(d));}) 
      .on("mouseover", function(d) {
          tooltip.transition()
               .duration(200)
               .style("opacity", .9);
          tooltip.html(d["cancertypedetailed"] + "<br/> (" + xValue(d) 
	        + ", " + yValue(d) + ")")
               .style("left", (d3.event.pageX + 5) + "px")
               .style("top", (d3.event.pageY - 28) + "px");
      })
      .on("mouseout", function(d) {
          tooltip.transition()
               .duration(500)
               .style("opacity", 0);
      });

// draw legend
  var legend = svg.selectAll(".legend")
      .data(color.domain())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; }); 

  // draw legend colored rectangles
  legend.append("rect")
      .attr("x", width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color); 
	  
	  

  // draw legend text
  legend.append("text")
      .attr("x", width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d;}) 
	  
	//d3.select("svg").remove();

}

//Draw the pie chart for male count
function addPieChart_male(fetch_data_array){
	
var width = 960,
    height = 500,
    radius = Math.min(width, height)/2;

var legendRectSize = 10;
var legendSpacing = 4;


var color = d3.scale.category20();

var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var labelArc = d3.svg.arc()
    .outerRadius(radius - 20)
    .innerRadius(radius - 10);

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.male; });

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
	
var g = svg.selectAll(".arc")
      .data(pie(fetch_data_array))
    .enter().append("g")
      .attr("class", "arc");
	  
   
  g.append("path")
      .attr("d", arc)
	  .style("fill", function(d) { return color(d.data.cancertype); });

 g.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"+ "rotate(" + angle(d) + ")"; })
      .attr("text-anchor", "middle")
    .text(function (d) {
    return d.data.male;});
	  


var legend = svg.selectAll('.legend')
  .data(color.domain())
  .enter()
  .append('g')
  .attr('class', 'legend')
  .attr('transform', function(d, i) {
    var height = legendRectSize + legendSpacing;
    var offset =  height * color.domain().length / 2;
    var horz =  30* legendRectSize;
    var vert =  i* height - offset;
    return 'translate(' + horz + ',' + vert + ')';
  });
  
  legend.append('rect')
  .attr('width', legendRectSize)
  .attr('height', legendRectSize)
  .style('fill', color)
  .style('stroke', color);
  
  legend.append('text')
  .attr('x', legendRectSize + legendSpacing)
  .attr('y', legendRectSize - legendSpacing)
  .text(function(d) { return d; });

function type(d) {
  d.cancertype = +d.cancertype;
  return d;
}

function angle(d) {
  var a = (d.startAngle + d.endAngle) * 90 / Math.PI - 90;
  return a > 90 ? a - 180 : a;
}	
}

//Draw the pie chart for female count
function addPieChart_female(fetch_data_array){
	
var width = 960,
    height = 500,
    radius = Math.min(width, height)/2;

var legendRectSize = 10;
var legendSpacing = 4;


var color = d3.scale.category20();

var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var labelArc = d3.svg.arc()
    .outerRadius(radius - 20)
    .innerRadius(radius - 10);

var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) { return d.female; });

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
	
var g = svg.selectAll(".arc")
      .data(pie(fetch_data_array))
    .enter().append("g")
      .attr("class", "arc");
	  
   
  g.append("path")
      .attr("d", arc)
	  .style("fill", function(d) { return color(d.data.cancertype); });

 g.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"+ "rotate(" + angle(d) + ")"; })
      .attr("text-anchor", "middle")
    .text(function (d) {
    return d.data.female;});
	  


var legend = svg.selectAll('.legend')
  .data(color.domain())
  .enter()
  .append('g')
  .attr('class', 'legend')
  .attr('transform', function(d, i) {
    var height = legendRectSize + legendSpacing;
    var offset =  height * color.domain().length / 2;
    var horz =  30* legendRectSize;
    var vert =  i* height - offset;
    return 'translate(' + horz + ',' + vert + ')';
  });
  
  legend.append('rect')
  .attr('width', legendRectSize)
  .attr('height', legendRectSize)
  .style('fill', color)
  .style('stroke', color);
  
  legend.append('text')
  .attr('x', legendRectSize + legendSpacing)
  .attr('y', legendRectSize - legendSpacing)
  .text(function(d) { return d; });

function type(d) {
  d.cancertype = +d.cancertype;
  return d;
}

function angle(d) {
  var a = (d.startAngle + d.endAngle) * 90 / Math.PI - 90;
  return a > 90 ? a - 180 : a;
}	

}



//Draw the parallel coordinates
function addParallelCoordinates(fetch_data_array){
	
console.log("ppp");

var margin = {top: 30, right: 10, bottom: 10, left: 10},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.ordinal().rangePoints([0, width], 1),
    y = {},
    dragging = {};

var line = d3.svg.line(),
    axis = d3.svg.axis().orient("left"),
    background,
    foreground;

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Extract the list of dimensions and create a scale for each.
  x.domain(dimensions = d3.keys(fetch_data_array[0]).filter(function(d) {
    return d!="cancertype" && (y[d] = d3.scale.linear()
        .domain(d3.extent(fetch_data_array, function(p) { return +p[d]; }))
        .range([height, 0]));
  }));

  // Add grey background lines for context.
  background = svg.append("g")
      .attr("class", "background")
    .selectAll("path")
      .data(fetch_data_array)
    .enter().append("path")
      .attr("d", path);

  // Add blue foreground lines for focus.
  foreground = svg.append("g")
      .attr("class", "foreground")
    .selectAll("path")
      .data(fetch_data_array)
    .enter().append("path")
      .attr("d", path);

  // Add a group element for each dimension.
  var g = svg.selectAll(".dimension")
      .data(dimensions)
    .enter().append("g")
      .attr("class", "dimension")
      .attr("transform", function(d) { return "translate(" + x(d) + ")"; })
      .call(d3.behavior.drag()
        .origin(function(d) { return {x: x(d)}; })
        .on("dragstart", function(d) {
          dragging[d] = x(d);
          background.attr("visibility", "hidden");
        })
        .on("drag", function(d) {
          dragging[d] = Math.min(width, Math.max(0, d3.event.x));
          foreground.attr("d", path);
          dimensions.sort(function(a, b) { return position(a) - position(b); });
          x.domain(dimensions);
          g.attr("transform", function(d) { return "translate(" + position(d) + ")"; })
        })
        .on("dragend", function(d) {
          delete dragging[d];
          transition(d3.select(this)).attr("transform", "translate(" + x(d) + ")");
          transition(foreground).attr("d", path);
          background
              .attr("d", path)
            .transition()
              .delay(500)
              .duration(0)
              .attr("visibility", null);
        }));

  // Add an axis and title.
  g.append("g")
      .attr("class", "axis")
      .each(function(d) { d3.select(this).call(axis.scale(y[d])); })
    .append("text")
      .style("text-anchor", "middle")
      .attr("y", -9)
      .text(function(d) { return d; });

  // Add and store a brush for each axis.
  g.append("g")
      .attr("class", "brush")
      .each(function(d) {
        d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brushstart", brushstart).on("brush", brush));
      })
    .selectAll("rect")
      .attr("x", -8)
      .attr("width", 16);


function position(d) {
  var v = dragging[d];
  return v == null ? x(d) : v;
}

function transition(g) {
  return g.transition().duration(500);
}

// Returns the path for a given data point.
function path(d) {
  return line(dimensions.map(function(p) { return [position(p), y[p](d[p])]; }));
}

function brushstart() {
  d3.event.sourceEvent.stopPropagation();
}

// Handles a brush event, toggling the display of foreground lines.
function brush() {
  var actives = dimensions.filter(function(p) { return !y[p].brush.empty(); }),
      extents = actives.map(function(p) { return y[p].brush.extent(); });
  foreground.style("display", function(d) {
    return actives.every(function(p, i) {
      return extents[i][0] <= d[p] && d[p] <= extents[i][1];
    }) ? null : "none";
  });
}	
}
	
	
