var cBioPortalData = {};
var arrList_cancer_type=[];
	var arrList_cancer_type_detailed=[];
	var arrList_Male_count=[];
	var arrList_Female_count=[];

var studyIds = ["paac_jhu_2014","laml_tcga_pub","laml_tcga","acyc_mskcc","acc_tcga","blca_mskcc_solit_2014","blca_mskcc_solit_2012","blca_mskcc_signet_ring_impact","blca_plasmacytoid_mskcc_2016","blca_bgi","blca_dfarber_mskcc_2014","blca_tcga_pub","blca_tcga","lgg_tcga","brca_bccrc","brca_broad","brca_sanger","brca_tcga_pub2015","brca_tcga_pub","brca_tcga","brca_bccrc_xenograft_2014","cellline_ccle_broad","cesc_tcga","chol_nccs_2013","chol_nus_2012","chol_tcga","ccrcc_utokyo_2013","coadread_genentech","coadread_tcga_pub","coadread_tcga","coadread_mskcc","cscc_dfarber_2015","desm_broad_2015","esca_broad","esca_tcga","escc_icgc","escc_ucla_2014","es_iocurie_2014","gbc_shanghai_2014","egc_tmucih_2015","gbm_tcga_pub2013","gbm_tcga_pub","gbm_tcga","hnsc_broad","hnsc_jhu","hnsc_tcga_pub","hnsc_tcga","all_stjude_2015","chol_jhu_2013","kich_tcga_pub","kich_tcga","kirc_bgi","kirc_tcga_pub","kirc_tcga","kirp_tcga","lihc_amc_prv","lihc_riken","lihc_tcga","lgg_ucsf_2014","luad_broad","luad_mskcc_2015","luad_tcga_pub","luad_tcga","luad_tsp","lusc_tcga_pub","lusc_tcga","dlbc_tcga","mpnst_mskcc","mbl_broad_2012","mbl_icgc","mbl_pcgp","skcm_broad_dfarber","lgggbm_tcga_pub","meso_tcga","prad_su2c_2015","mm_broad","ccrcc_irc_2014","cellline_nci60","npc_nusingapore","nbl_amc_2012","nepc_wcm","ov_tcga_pub","ov_tcga","paad_icgc","paad_tcga","paad_utsw_2015","panet_jhu_2011","thca_tcga_pub","es_dfarber_broad_2014","pcpg_tcga","thyroid_mskcc_2016","pcnsl_mayo_2015","prad_broad_2013","prad_broad","prad_mskcc","prad_fhcrc","prad_tcga_pub","prad_tcga","prad_mskcc_2014","prad_mskcc_cheny1_organoids_2014","prad_mich","nccrcc_genentech_2014","rms_nih_2014","sarc_mskcc","sarc_tcga","skcm_broad","skcm_tcga","skcm_yale","scco_mskcc","sclc_clcgp","sclc_jhu","sclc_ucologne_2015","stad_pfizer_uhongkong","stad_tcga_pub","stad_tcga","stad_utokyo","stad_uhongkong","tgct_tcga","tet_nci_2014","thym_tcga","thca_tcga","ucs_jhu_2014","ucs_tcga","ucec_tcga","ucec_tcga_pub","uvm_tcga"];
//var profileIds = ["_mutations","_gistic"];
var profileIds = ["_male","_female"];
var profileDefaultProperty = ["# DATA_TYPE	 Mutations","# DATA_TYPE	Putative copy-number alterations from GISTIC"];
var studyNames = ["Acinar Cell Carcinoma of the Pancreas (Johns Hopkins, J Pathol 2014)","Acute Myeloid Leukemia (TCGA, NEJM 2013)","Acute Myeloid Leukemia (TCGA, Provisional)","Adenoid Cystic Carcinoma (MSKCC, Nat Genet 2013)","Adrenocortical Carcinoma (TCGA, Provisional)","Bladder Cancer (MSKCC, Eur Urol 2014)","Bladder Cancer (MSKCC, J Clin Oncol 2013)","Bladder Cancer, Plasmacytoid Variant (MSKCC, Nat Genet 2016)","Bladder Cancer, Plasmacytoid Variant (MSKCC, Nat Genet 2016)","Bladder Urothelial Carcinoma (BGI, Nat Genet 2013)","Bladder Urothelial Carcinoma (Dana Farber & MSKCC, Cancer Discovery 2014)","Bladder Urothelial Carcinoma (TCGA, Nature 2014)","Bladder Urothelial Carcinoma (TCGA, Provisional)","Brain Lower Grade Glioma (TCGA, Provisional)","Breast Invasive Carcinoma (British Columbia, Nature 2012)","Breast Invasive Carcinoma (Broad, Nature 2012)","Breast Invasive Carcinoma (Sanger, Nature 2012)","Breast Invasive Carcinoma (TCGA, Cell 2015)","Breast Invasive Carcinoma (TCGA, Nature 2012)","Breast Invasive Carcinoma (TCGA, Provisional)","Breast cancer patient xenografts (British Columbia, Nature 2014)","Cancer Cell Line Encyclopedia (Novartis/Broad, Nature 2012)","Cervical Squamous Cell Carcinoma and Endocervical Adenocarcinoma (TCGA, Provisional)","Cholangiocarcinoma (National Cancer Centre of Singapore, Nat Genet 2013)","Cholangiocarcinoma (National University of Singapore, Nat Genet 2012)","Cholangiocarcinoma (TCGA, Provisional)","Clear Cell Renal Cell Carcinoma (U Tokyo, Nat Genet 2013)","Colorectal Adenocarcinoma (Genentech, Nature 2012)","Colorectal Adenocarcinoma (TCGA, Nature 2012)","Colorectal Adenocarcinoma (TCGA, Provisional)","Colorectal Adenocarcinoma Triplets (MSKCC, Genome Biology 2014)","Cutaneous squamous cell carcinoma (DFCI, Clin Cancer Res 2015)","Desmoplastic Melanoma (Broad Institute, Nat Genet 2015)","Esophageal Adenocarcinoma (Broad, Nat Genet 2013)","Esophageal Carcinoma (TCGA, Provisional)","Esophageal Squamous Cell Carcinoma (ICGC, Nature 2014)","Esophageal Squamous Cell Carcinoma (UCLA, Nat Genet 2014)","Ewing Sarcoma (Institut Cuire, Cancer Discov 2014)","Gallbladder Carcinoma (Shanghai, Nat Genet 2014)","Gastric Adenocarcinoma (TMUCIH, PNAS 2015)","Glioblastoma (TCGA, Cell 2013)","Glioblastoma (TCGA, Nature 2008)","Glioblastoma Multiforme (TCGA, Provisional)","Head and Neck Squamous Cell Carcinoma (Broad, Science 2011)","Head and Neck Squamous Cell Carcinoma (Johns Hopkins, Science 2011)","Head and Neck Squamous Cell Carcinoma (TCGA, Nature 2015)","Head and Neck Squamous Cell Carcinoma (TCGA, Provisional)","Infant MLL-Rearranged Acute Lymphoblastic Leukemia (St Jude, Nat Genet 2015)","Intrahepatic Cholangiocarcinoma (Johns Hopkins University, Nat Genet 2013)","Kidney Chromophobe (TCGA, Cancer Cell 2014)","Kidney Chromophobe (TCGA, Provisional)","Kidney Renal Clear Cell Carcinoma (BGI, Nat Genet 2012)","Kidney Renal Clear Cell Carcinoma (TCGA, Nature 2013)","Kidney Renal Clear Cell Carcinoma (TCGA, Provisional)","Kidney Renal Papillary Cell Carcinoma (TCGA, Provisional)","Liver Hepatocellular Carcinoma (AMC, Hepatology 2014)","Liver Hepatocellular Carcinoma (RIKEN, Nat Genet 2012)","Liver Hepatocellular Carcinoma (TCGA, Provisional)","Low-Grade Gliomas (UCSF, Science 2014)","Lung Adenocarcinoma (Broad, Cell 2012)","Lung Adenocarcinoma (MSKCC 2015)","Lung Adenocarcinoma (TCGA, Nature 2014)","Lung Adenocarcinoma (TCGA, Provisional)","Lung Adenocarcinoma (TSP, Nature 2008)","Lung Squamous Cell Carcinoma (TCGA, Nature 2012)","Lung Squamous Cell Carcinoma (TCGA, Provisional)","Lymphoid Neoplasm Diffuse Large B-cell Lymphoma (TCGA, Provisional)","Malignant Peripheral Nerve Sheath Tumor (MSKCC, Nat Genet 2014)","Medulloblastoma (Broad, Nature 2012)","Medulloblastoma (ICGC, Nature 2012)","Medulloblastoma (PCGP, Nature 2012)","Melanoma (Broad/Dana Farber, Nature 2012)","Merged Cohort of LGG and GBM (TCGA, 2016)","Mesothelioma (TCGA, Provisional)","Metastatic Prostate Cancer, SU2C/PCF Dream Team (Robinson et al., Cell 2015)","Multiple Myeloma (Broad, Cancer Cell 2014)","Multiregion Sequencing of Clear Cell Renal Cell Carcinoma (IRC, Nat Genet 2014)","NCI-60 Cell Lines (NCI, Cancer Res. 2012)","Nasopharyngeal Carcinoma (Singapore, Nat Genet 2014)","Neuroblastoma (AMC Amsterdam, Nature 2012)","Neuroendocrine Prostate Cancer (Trento/Cornell/Broad 2016)","Ovarian Serous Cystadenocarcinoma (TCGA, Nature 2011)","Ovarian Serous Cystadenocarcinoma (TCGA, Provisional)","Pancreatic Adenocarcinoma (ICGC, Nature 2012)","Pancreatic Adenocarcinoma (TCGA, Provisional)","Pancreatic Cancer (UTSW, Nat Commun 2015)","Pancreatic Neuroendocrine Tumors (Johns Hopkins University, Science 2011)","Papillary Thyroid Carcinoma (TCGA, Cell 2014)","Pediatric Ewing Sarcoma (DFCI, Cancer Discov 2014)","Pheochromocytoma and Paraganglioma (TCGA, Provisional)","Poorly-Differentiated and Anaplastic Thyroid Cancers (MSKCC, JCI 2016)","Primary Central Nervous System Lymphoma (Mayo Clinic, Clin Cancer Res 2015)","Prostate Adenocarcinoma (Broad/Cornell, Cell 2013)","Prostate Adenocarcinoma (Broad/Cornell, Nat Genet 2012)","Prostate Adenocarcinoma (MSKCC, Cancer Cell 2010)","Prostate Adenocarcinoma (Nelson Lab, Fred Hutchinson CRC)","Prostate Adenocarcinoma (TCGA, Cell 2015)","Prostate Adenocarcinoma (TCGA, Provisional)","Prostate Adenocarcinoma CNA study (MSKCC, PNAS 2014)","Prostate Adenocarcinoma Organoids (MSKCC, Cell 2014)","Prostate Adenocarcinoma, Metastatic (Michigan, Nature 2012)","Renal Non-Clear Cell Carcinoma (Genentech, Nat Genet 2014)","Rhabdomyosarcoma (NIH, Cancer Discov 2014)","Sarcoma (MSKCC/Broad, Nat Genet 2010)","Sarcoma (TCGA, Provisional)","Skin Cutaneous Melanoma (Broad, Cell 2012)","Skin Cutaneous Melanoma (TCGA, Provisional)","Skin Cutaneous Melanoma (Yale, Nat Genet 2012)","Small Cell Carcinoma of the Ovary (MSKCC, Nat Genet 2014)","Small Cell Lung Cancer (CLCGP, Nat Genet 2012)","Small Cell Lung Cancer (Johns Hopkins, Nat Genet 2012)","Small Cell Lung Cancer (U Cologne, Nature 2015)","Stomach Adenocarcinoma (Pfizer and UHK, Nat Genet 2014)","Stomach Adenocarcinoma (TCGA, Nature 2014)","Stomach Adenocarcinoma (TCGA, Provisional)","Stomach Adenocarcinoma (U Tokyo, Nat Genet 2014)","Stomach Adenocarcinoma (UHK, Nat Genet 2011)","Testicular Germ Cell Cancer (TCGA, Provisional)","Thymic Epithelial Tumors (NCI, Nat Genet 2014)","Thymoma (TCGA, Provisional)","Thyroid Carcinoma (TCGA, Provisional)","Uterine Carcinosarcoma (Johns Hopkins University, Nat Commun 2014)","Uterine Carcinosarcoma (TCGA, Provisional)","Uterine Corpus Endometrial Carcinoma (TCGA, Provisional)","Uterine Corpus Endometrioid Carcinoma (TCGA, Nature 2013)","Uveal Melanoma (TCGA, Provisional)"];

var data_set_DefaultProperty = ["CANCER_TYPE","CANCER_TYPE_DETAILED","DAYS_TO_COLLECTION","DAYS_TO_DEATH","DAYS_TO_INITIAL_PATHOLOGIC_DIAGNOSIS","ETHNICITY","GENDER","SEX"];

	var case_id_count=0;
	var cancer_type_count=0;
	var male_count=0;
	var female_count=0;
	var days_to_collection_count=0;
	var days_to_death_count=0;
	var days_to_initial_pathologic_diagnosis_count=0;  
	//var days_to_collection_count=0;
	var hispano_latino_count=0;
	var not_hispano_latino_count=0;
	
	var case_id_value=0;
	var cancer_type_val=0;
	var cancer_type_detailed_val=0;
	var ethnicity_val=0;
	var geneName = "TG";






function Fetch_from_Data_set(geneName)
{
	  	cBioPortalData[geneName] = new Object();
  	
  	if (geneName=="")  
		updateNodeColors(); 
  	else
	{
  		for (var p=0;p<profileIds.length;p++){  
  			cBioPortalData[geneName][p] = new Object();		 		
			for (var i=0;i<studyIds.length;i++){  
				var strServer = "http://www.cbioportal.org/webservice.do?";	
				// Profile blca_tcga_pub_gistic  blca_tcga_pub_mutations
				var study = studyIds[i];
				var profile = profileIds[p];
				
				//var request = "cmd=getProfileData&case_set_id="+study+"_all&genetic_profile_id="+study+profile+"&gene_list="+geneName;
				var request = "cmd=getClinicalData&case_set_id="+study+"_all"
				console.log("Request URL:::::"+request); 
				var str2 = strServer+request;
				console.log(str2);
				(function(request,i,p) { 	
					d3.csv(str2, function(error, json) {
					 	if (error) {
							console.warn("warn: "+error);
						//	updateNodeColors();
						//debugger;
							return;
						}	
					})
					.get()
					.on('load', function(d) {
                      
					/*
						var case_id_count=0;
						var cancer_type_count=0;
						var male_count=0;
						var female_count=0;
						var days_to_collection_count=0;
						var days_to_death_count=0;
						var days_to_initial_pathologic_diagnosis_count=0;  
						//var days_to_collection_count=0;
						var hispano_latino_count=0;
						var not_hispano_latino_count=0;
						*/
						
						for(var i=0;i<d.length;i++)
						{
							for( key in d[i])
							{
								/*
								var case_id_value=0;
								var cancer_type_val=0;
								var cancer_type_detailed_val=0;
								var ethnicity_val=0;
								*/
								
								//var days_to_death_count;
								
								//var days_to_collection_val=0;
								// To fetch the index 
								var case_id=key.split("	").indexOf("CASE_ID")
								var cancer_type=key.split("	").indexOf("CANCER_TYPE")
								var cancer_type_detailed=key.split("	").indexOf("CANCER_TYPE_DETAILED")
								var days_to_collection=key.split("	").indexOf("DAYS_TO_COLLECTION")
								var days_to_death=key.split("	").indexOf("DAYS_TO_DEATH")
								var days_to_initial_pathologic_diagnosis=key.split("	").indexOf("DAYS_TO_INITIAL_PATHOLOGIC_DIAGNOSIS")
								var ethnicity=key.split("	").indexOf("ETHNICITY")
								var sex=key.split("	").indexOf("SEX")
								var gender=key.split("	").indexOf("GENDER")
								case_id_val=d[i][key].split("	")[case_id];
								cancer_type_val=d[i][key].split("	")[cancer_type];
								cancer_type_detailed_val=d[i][key].split("	")[cancer_type_detailed];
								
								
								//console.log("Case ID is"+case_id_val+" "+"and cancer_type is "+cancer_type_val);
								//key.indexOf("SEX")  key.indexOf("GENDER")
								//d[i][key].split("	")[key.split("	").indexOf("SEX")]
								//debugger;
								/*
								while(case_id_count>1)
								{
									if(case_id_count>-1)
									{
										var cur_row_val=d[i][key].split("	")[case_id];
										//if(cur_row_val=="M" || cur_row_val=="MALE")
										//{
											case_id_count=case_id_count+1;
											console.log("Case ID corresponding to "+case_id_count+" "+"row is "+cur_row_val);
										//}
										/*
										else if(cur_row_val=="F" || cur_row_val=="FEMALE")
										{
											female_count=female_count+1;
										}								
										
									}
								}
								
								*/
								
								if(days_to_collection>=0)
								{
									var cur_row_val=parseInt(d[i][key].split("	")[days_to_collection]);
									//console.log("cuurrrrr:::"+cur_row_val);
									//debugger;
									//var days_to_collection_count=0;
									if(cur_row_val>0)
									{
									days_to_collection_count=days_to_collection_count+cur_row_val;
									}
									
								}
								
								
								if(days_to_death>=0)
								{
									var cur_row_val=parseInt(d[i][key].split("	")[days_to_death]);
									//console.log("cuurrrrr:::"+cur_row_val);
									//debugger;
									//var days_to_death_count=0;
									if(cur_row_val>0)
									{
									days_to_death_count=days_to_death_count+cur_row_val;
									}
									
								}
								
								if(days_to_initial_pathologic_diagnosis>=0)
								{
									var cur_row_val=parseInt(d[i][key].split("	")[days_to_initial_pathologic_diagnosis]);
									//console.log("cuurrrrr:::"+cur_row_val);
									//debugger;
									//var days_to_initial_pathologic_diagnosis_count=0;
									if(cur_row_val>0)
									{
									days_to_initial_pathologic_diagnosis_count=days_to_initial_pathologic_diagnosis_count+cur_row_val;
									}
									
								}
								
								
								if(ethnicity>=0)
								{
									var cur_row_val=d[i][key].split("	")[ethnicity];
									if(cur_row_val=="HISPANIC OR LATINO")
									{
										hispano_latino_count=hispano_latino_count+1;
									}
									else if(cur_row_val=="NOT HISPANIC OR LATINO")
									{
										not_hispano_latino_count=not_hispano_latino_count+1;
									}
										
								}
								
								if(sex>=0)
								{
									var cur_row_val=d[i][key].split("	")[sex];
									if(cur_row_val=="M" || cur_row_val=="MALE")
									{
										male_count=male_count+1;
									}
									else if(cur_row_val=="F" || cur_row_val=="FEMALE")
									{
										female_count=female_count+1;
									}
										
								}
								else if(gender>=0)
								{
									var cur_row_val=d[i][key].split("	")[""||gender];
									if(cur_row_val=="M" || cur_row_val=="MALE")
									{
										male_count=male_count+1;
									}
									else if(cur_row_val=="F" || cur_row_val=="FEMALE")
									{
										female_count=female_count+1;
									}
										
								}
								
								

							}
							//debugger;
						}
						
						arrList_cancer_type.push(cancer_type_val);
						arrList_cancer_type_detailed.push(cancer_type_detailed_val);
						arrList_Male_count.push(male_count);
						arrList_Female_count.push(female_count);
					    console.log("CANCER_TYPE is "+cancer_type_val+",|||||| CANCER_TYPE_DETAILED="+cancer_type_detailed_val+", ||||| DAYS_TO_COLLECTION="+days_to_collection_count+", ||||| DAYS_TO_DEATH="+days_to_death_count+", ||||| DAYS_TO_INITIAL_PATHOLOGIC_DIAGNOSIS="+days_to_initial_pathologic_diagnosis_count+" and its |||||| Male Count="+male_count+" "+", ||||| Female Count="+female_count+" "+", |||||||| ETHNICITY count of hispano_latino_count="+hispano_latino_count+" "+", |||||||| ETHNICITY count of NOT hispano_latino_count="+not_hispano_latino_count);
						//debugger;
						
						//console.log(arrList_cancer_type);
						
				        
						
						//addScatterPlot();
						
						var parameterName = data_set_DefaultProperty[p];
						
						//var arr = d3.tsv.parseRows(d[2][propertyName])[0];
						
						cBioPortalData[geneName][p][i] = new Object();	
						cBioPortalData[geneName][p][i]["count"] = male_count;
						cBioPortalData[geneName][p][i]["array"] = female_count;	
                        
						/*
						if (d.length>0){
					 		var propertyName = profileDefaultProperty[p];
					 		//console.log("1_"+propertyName); 
					 		for (key in d[2]) {
					 			if (key.indexOf("# DATA_TYPE")>-1)
					 				propertyName = key;
					 			else if (key.indexOf("Unknown gene")>-1){
					 				propertyName = key;
					 			}
					 				
					 		}
					 		//console.log("2_"+propertyName); 
					 		if (propertyName.indexOf("Unknown gene")>-1)
					 		{
								//console.log(propertyName); 	
							}	
							else{
							 	var arr = d3.tsv.parseRows(d[2][propertyName])[0];
							 	
							 	for (var j=0;j<arr.length;j++){
							 		if (arr[j]!="NaN" && arr[j]!="0")
							 			count++;
							 	} 
							 	//console.log(profileIds[p]+" "+i+" study="+studyIds[i]+" count="+count+ " /"+arr.length); 
						 		cBioPortalData[geneName][p][i] = new Object();	
						 		cBioPortalData[geneName][p][i]["count"] = count;
						 		cBioPortalData[geneName][p][i]["array"] = arr;		 		
						 	}
						}
						*/
						
					});  
				 })(request,i,p);
			} 
		}
	}
}


function addScatterPlot(){
	
	var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

/* 
 * value accessor - returns the value to encode for a given data object.
 * scale - maps value to a visual display encoding, such as a pixel position.
 * map function - maps from data value to display value
 * axis - sets up axis
 */
var xValue=[];
var yValue=[];
var zValue=[];
var data=[];
 console.log("eee");
xValue.push(arrList_Male_count);
yValue.push(arrList_Female_count);
zValue.push(arrList_cancer_type);

data.push(xValue);
data.push(yValue);

// setup x 
  //debugger
  var xScale = d3.scale.linear().range([0, width]), // value -> display
    xMap = function(d) { return xScale(xValue(d));}, // data -> display
    xAxis = d3.svg.axis().scale(xScale).orient("bottom");

// setup y
 // data -> value
   var yScale = d3.scale.linear().range([height, 0]), // value -> display
    yMap = function(d) { return yScale(yValue(d));}, // data -> display
    yAxis = d3.svg.axis().scale(yScale).orient("left");

// setup fill color
var cValue = function(d) { return 0;},
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

  // don't want dots overlapping axis, so add in buffer to data domain
  xScale.domain([d3.min(data, xValue)-1, d3.max(data, xValue)+1]);
  yScale.domain([d3.min(data, yValue)-1, d3.max(data, yValue)+1]);

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
      .text("Male_count");

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
      .text("Female_count");

  // draw dots
  svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 3.5)
      .attr("cx", xMap)
      .attr("cy", yMap)
      .style("fill", function(d) { return color(cValue(d));}) 
      .on("mouseover", function(d) {
          tooltip.transition()
               .duration(200)
               .style("opacity", .9);
          tooltip.html(d["Cancer Type"] + "<br/> (" + xValue(d) 
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
