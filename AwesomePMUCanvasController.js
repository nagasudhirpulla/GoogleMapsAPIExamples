/**
 * Created by Nagasudhir on 4/25/2016.
 */
/*
 *An explanation about how to create a javascript class similar to OOPS class so that it has instance variables, type functions or prototype functions and static variables that will be shared by all instances
 *http://stackoverflow.com/questions/1535631/static-variables-in-javascript
 */
"use strict";
/*Our Mighty Canvas Controller*/
function AwesomePMUCanvasController(opt_options) {
    this.filterCanvas_ = null;
    this.filterCtx_ = null;
    this.crapCanvas_ = null;
    this.crapCtx_ = null;
    this.filterDataArray_ = null;
    this.projection_ = null;
    this.plottedZoom_ = null;
    this.plottedTopLeft_ = null;
    this.overLayView_ = null;
    this.infowindow_ = null;
    this.iconImage_ = null;
    this.iconImageRed_ = null;
    this.mapCenter_ = null;
    this.map_ = null;
    this.ctx_ = null;
    this.c_ = null;
    this.xp_ = null;
    this.yp_ = null;
    this.lat_width_ = null;
    this.long_hgt_ = null;
    this.npx_ = null;
    this.npy_ = null;
    this.npxRatioSquare_ = null;
    this.isBusy_ = null;
    this.isPaintBusy_ = false;
    //random pmu sources_ array
    //this.sources_ = [[22.46, 73.39, 0.96, "WRLDC.PHASOR.WRDC1001", 400, "Vadodara", "OK"], [21.91, 77.34, 1.52, "WRLDC_B.PHASOR1.WRDC1160", 400, "NAME1", "OK"], [20.09, 79.11, 1.34, "WRLDC.PHASOR.WRDC0159", 400, "CHANDRAPUR", "OK"], [21.04, 75.77, 1.6, "WRLDC_B.PHASOR1.WRDC0935", 400, "JALGAON", "OK"], [24.17, 78.19, 0.91, "WRLDC.PHASOR.WRDC0336", 400, "Sagar", "OK"], [19.79, 72.72, 1.55, "WRLDC.PHASOR.WRDC0305", 400, "THANE", "OK"], [22.82, 69.53, 1.09, "WRLDC.PHASOR.WRDC0024", 400, "Kutch", "OK"], [19.95, 79.28, 1.23, "WRLDC_B.PHASOR1.WRDC1013", 400, "CHANDRAPUR", "OK"], [23.17, 72.81, 1.53, "WRLDC.PHASOR.WRDC0232", 400, "Gandhinagar", "OK"], [21.28, 79.98, 1.13, "WRLDC.PHASOR.WRDC1062", 400, "CHANDRAPUR", "OK"], [20.90, 74.76, 1.32, "WRLDC_B.PHASOR1.WRDC0857", 400, "DHULE", "OK"], [22.60, 77.75, 1.11, "WRLDC.PHASOR.WRDC0086", 400, "Hoshangabad", "OK"], [23.17, 79.98, 1.54, "WRLDC.PHASOR.WRDC0464", 400, "Jabalpur", "OK"], [21.73, 70.63, 1.48, "WRLDC_B.PHASOR1.WRDC0471", 400, "Rajkot", "OK"], [19.20, 73.00, 1.04, "WRLDC.PHASOR.WRDC0749", 400, "THANE", "OK"], [16.69, 74.22, 1.34, "WRLDC_B.PHASOR1.WRDC0584", 400, "KOLHAPUR", "OK"], [21.24, 79.09, 1.44, "WRLDC_B.PHASOR1.WRDC1121", 400, "NAGPUR", "OK"], [22.38, 82.68, 1.01, "WRLDC.PHASOR.WRDC0194", 400, "Korba", "OK"], [18.63, 74.02, 1.08, "WRLDC_B.PHASOR1.WRDC0701", 400, "PUNE", "OK"], [22.83, 69.73, 1.01, "WRLDC_B.PHASOR1.WRDC0004", 400, "Kutch", "OK"], [19.99, 73.64, 1.2, "WRLDC_B.PHASOR1.WRDC0857", 220, "NAME2", "OK"], [17.43, 73.66, 1.49, "WRLDC_B.PHASOR1.WRDC0623", 400, "SATARA", "OK"], [19.35, 73.17, 1.18, "WRLDC_B.PHASOR1.WRDC0662", 400, "THANE", "OK"], [18.84, 76.51, 1.53, "WRLDC_B.PHASOR1.WRDC0740", 400, "BEED", "OK"], [21.25, 81.62, 1.36, "WRLDC.PHASOR.WRDC1222", 400, "Raipur", "OK"], [23.82, 72.46, 1.23, "WRLDC_B.PHASOR1.WRDC0515", 400, "Mehsana", "OK"], [24.58, 80.87, 1.02, "WRLDC_B.PHASOR1.WRDC0249", 400, "Satna", "OK"], [17.68, 75.91, 1.18, "WRLDC.PHASOR.WRDC0804", 400, "SOLAPUR", "OK"], [17.65, 75.90, 1.45, "WRLDC.PHASOR.WRDC0870", 765, "NAME3", "OK"], [17.66, 75.94, 1.15, "WRLDC_B.PHASOR1.WRDC0896", 400, "SOLAPUR", "OK"], [24.03, 82.57, 1.28, "WRLDC.PHASOR.WRDC0412", 400, "Singrauli", "OK"], [24.47, 72.03, 1.32, "WRLDC_B.PHASOR1.WRDC0204", 400, "Banaskantha", "OK"]];
    //real pmu sources_ array
    //this.sources_ = [[22.46,73.39,1.0274,"WRLDC.PHASOR.WRDC1001",400,"Vadodara","OK"],[21.91,77.34,1.0412,"WRLDC_B.PHASOR1.WRDC1160",400,"NAME1","OK"],[20.09,79.11,1.0344,"WRLDC.PHASOR.WRDC0159",400,"CHANDRAPUR","OK"],[21.04,75.77,1.6,"WRLDC_B.PHASOR1.WRDC0935",400,"JALGAON","UNRELIABLE"],[24.17,78.19,1.0127,"WRLDC.PHASOR.WRDC0336",400,"Sagar","OK"],[19.79,72.72,1.0231,"WRLDC.PHASOR.WRDC0305",400,"THANE","OK"],[22.82,69.53,1.0297,"WRLDC.PHASOR.WRDC0024",400,"Kutch","OK"],[19.95,79.28,1.055,"WRLDC_B.PHASOR1.WRDC1013",400,"CHANDRAPUR","OK"],[23.17,72.81,1.0333,"WRLDC.PHASOR.WRDC0232",400,"Gandhinagar","OK"],[21.28,79.98,1.0578,"WRLDC.PHASOR.WRDC1062",400,"CHANDRAPUR","OK"],[20.9,74.76,1.32,"WRLDC_B.PHASOR1.WRDC0857",400,"DHULE","UNRELIABLE"],[22.6,77.75,1.0027,"WRLDC.PHASOR.WRDC0086",400,"Hoshangabad","OK"],[23.17,79.98,1.043,"WRLDC.PHASOR.WRDC0464",400,"Jabalpur","OK"],[21.73,70.63,1.0383,"WRLDC_B.PHASOR1.WRDC0471",400,"Rajkot","OK"],[19.2,73,1.027,"WRLDC.PHASOR.WRDC0749",400,"THANE","OK"],[16.69,74.22,1.34,"WRLDC_B.PHASOR1.WRDC0584",400,"KOLHAPUR","UNRELIABLE"],[21.24,79.09,1.0149,"WRLDC_B.PHASOR1.WRDC1121",400,"NAGPUR","OK"],[22.38,82.68,1.0477,"WRLDC.PHASOR.WRDC0194",400,"Korba","OK"],[18.63,74.02,1.0135,"WRLDC_B.PHASOR1.WRDC0701",400,"PUNE","OK"],[22.83,69.73,1.0259,"WRLDC_B.PHASOR1.WRDC0004",400,"Kutch","OK"],[19.99,73.64,1.2,"WRLDC_B.PHASOR1.WRDC0857",220,"NAME2","UNRELIABLE"],[17.43,73.66,1.0517,"WRLDC_B.PHASOR1.WRDC0623",400,"SATARA","OK"],[19.35,73.17,1.0375,"WRLDC_B.PHASOR1.WRDC0662",400,"THANE","OK"],[18.84,76.51,1.0322,"WRLDC_B.PHASOR1.WRDC0740",400,"BEED","OK"],[21.25,81.62,1.36,"WRLDC.PHASOR.WRDC1222",400,"Raipur","UNRELIABLE"],[23.82,72.46,1.0421,"WRLDC_B.PHASOR1.WRDC0515",400,"Mehsana","OK"],[24.58,80.87,1.02,"WRLDC_B.PHASOR1.WRDC0249",400,"Satna","UNRELIABLE"],[17.68,75.91,1.0435,"WRLDC.PHASOR.WRDC0804",400,"SOLAPUR","OK"],[17.65,75.9,1.0372,"WRLDC.PHASOR.WRDC0870",765,"NAME3","OK"],[17.66,75.94,1.15,"WRLDC_B.PHASOR1.WRDC0896",400,"SOLAPUR","UNRELIABLE"],[24.03,82.57,1.0242,"WRLDC.PHASOR.WRDC0412",400,"Singrauli","OK"],[24.47,72.03,1.0428,"WRLDC_B.PHASOR1.WRDC0204",400,"Banaskantha","OK"]];
    //scada sources_ array
    this.sources_ = [ [21.6, 71.21, 1.031625, "WRLDCMP.SCADA1.A0048293", 400, "AMRELI  400kV SUBSTATION,  Gujrat, SUBSTN.AMRL_JTG.BUS.4B1.MES1.KVRY", "OK"], [22.83, 69.73, 1.028775, "WRLDCMP.SCADA1.A0017988", 400, "MUNDRA  400 kV,  Gujrat, SUBSTN.ADAN_JTG.PMU.4B1.MES1.KV", "OK"], [19.88, 75.37, 1.041775, "WRLDCMP.SCADA1.A0026840", 400, "AURANGABAD 400kV SUBSTATION,  maharashtra, SUBSTN.ARBD4_MH.BUS.4_B1.MES1.KV", "OK"], [22.46, 73.39, 1.018475, "WRLDCMP.SCADA1.A0015067", 400, "ASOJ    400kV SUBSTATION,  Gujrat, SUBSTN.ASOJ_JMG.BUS.4B1.MES1.KV", "OK"], [0, 0, 1, "WRLDCMP.SCADA1.A0015069", 0, ", , SUBSTN.ASOJ_JMG.BUS.4B2.MES1.KV", "UNRELIABLE"], [0, 0, 1, "WRLDCMP.SCADA1.A0015063", 0, ", , SUBSTN.ASOJ_JMG.BUS.2B1.MES1.KV", "UNRELIABLE"], [0, 0, 1, "WRLDCMP.SCADA1.A0015065", 0, ", , SUBSTN.ASOJ_JMG.BUS.2B2.MES1.KV", "UNRELIABLE"], [19.59, 74.5, 0, "WRLDCMP.SCADA1.A0026956", 400, "BABHALESHWAR 400kV SUBSTATION,  maharashtra, SUBSTN.BBLSR_MH.BUS.4_B2.MES1.KV", "OK"], [20.09, 79.11, 1.041925, "WRLDCMP.SCADA1.A0000279", 400, "BHADRAWATI 400kV SUBSTATION,  maharashtra, SUBSTN.BHDRV_PG.BUS.4B1.MES1.KV", "OK"], [0, 0, 1, "WRLDCMP.SCADA1.A0022022", 0, ", , SUBSTN.BHIL4_CG.BUS.4B1.MES1.KV", "UNRELIABLE"], [23.22, 77.39, 1.01555, "WRLDCMP.SCADA1.A0005910", 400, "BHOPAL 400kV SUBSTATION,  Madhya Pradesh, SUBSTN.BHP4_BMP.BUS.4B1.MES1.KV", "OK"], [19.79, 72.72, 1.026075, "WRLDCMP.SCADA1.A0000850", 400, "BOISAR-PG 400kV SUBSTATION,  maharashtra, SUBSTN.BOISR_PG.BUS.4B1.MES1.KV", "OK"], [21.04, 75.77, 1, "WRLDCMP.SCADA1.A0027577", 400, "BHUSAWAL 400kV SUBSTATION,  maharashtra, SUBSTN.BHSW4_MH.BUS.4_B1.MES1.KV", "OK"], [24.17, 78.19, 1.0053, "WRLDCMP.SCADA1.A0010476", 400, "BINA    400kV SUBSTATION,  Madhya Pradesh, SUBSTN.BIN4_JMP.BUS.4B1.MES1.KV", "OK"], [24.18, 78.2, 1.013875, "WRLDCMP.SCADA1.A0000653", 400, "BINA-PG  400kV SUBSTATION,  Madhya Pradesh, SUBSTN.BINA4_PG.BUS.4B1.MES1.KV", "OK"], [24.18, 78.2, 1.00284967320261, "WRLDCMP.SCADA1.A0000833", 765, "BINA-PG  765kV SUBSTATION,  Madhya Pradesh, SUBSTN.BINA7_PG.PMU.7B1.MES1.KV", "OK"], [23.36, 81.03, 1.033375, "WRLDCMP.SCADA1.A0010713", 400, "BIRSINGPUR  400 kV,  Madhya Pradesh, SUBSTN.SGTP_JMP.BUS.4B1.MES1.KV", "OK"], [0, 0, 1, "WRLDCMP.SCADA1.A0000850", 0, ", , SUBSTN.BOISR_PG.BUS.4B1.MES1.KV", "UNRELIABLE"], [19.95, 79.28, 1.06505, "WRLDCMP.SCADA1.A0027935", 400, "CHANDRAPUR 400kV SUBSTATION,  maharashtra, SUBSTN.CHDPR_MH.BUS.4_B1.MES1.KV", "OK"], [17.58, 73.17, 1.038, "WRLDCMP.SCADA1.A0003558", 400, "RGPPL_DABHOL 400 kV,  maharashtra, SUBSTN.RGPPL_GS.BUS.4B1.MES1.KV", "OK"], [23.82, 79.45, 1.029575, "WRLDCMP.SCADA1.A0001028", 400, "DAMOH 400kV SUBSTATION,  Madhya Pradesh, SUBSTN.DAMOH_PG.BUS.4B1.MES1.KV", "OK"], [23.17, 72.81, 1.04565, "WRLDCMP.SCADA1.A0001234", 400, "DEHGAM   400kV SUBSTATION,  Gujrat, SUBSTN.DGHAM_PG.PMU.4B1.MES1.KV", "OK"], [20.9, 74.76, 1.044275, "WRLDCMP.SCADA1.A0028703", 400, "DHULE 400kV SUBSTATION,  maharashtra, SUBSTN.DHUL4_MH.BUS.4_B1.MES1.KV", "OK"], [0, 0, 1, "WRLDCMP.SCADA1.A0015871", 0, ", , SUBSTN.CLPI_JMG.BUS.4B1.MES1.KV", "UNRELIABLE"], [26.23, 78.15, 0.9944, "WRLDCMP.SCADA1.A0001475", 400, "GWALIOR 400kV SUBSTATION,  Madhya Pradesh, SUBSTN.GWALR_PG.BUS.4B1.MES1.KV", "OK"], [26.21, 78.17, 0.997411764705882, "WRLDCMP.SCADA1.A0001479", 765, "GWALIOR 765kV SUBSTATION,  Madhya Pradesh, SUBSTN.GWALR_PG.BUS.7B1.MES1.KV", "OK"], [22.43, 70.75, 1.040425, "WRLDCMP.SCADA1.A0018738", 400, "HADALA   400kV SUBSTATION,  Gujrat, SUBSTN.HDLA_JTG.BUS.4B1.MES1.KV", "OK"], [22.74, 75.84, 1.023, "WRLDCMP.SCADA1.A0008306", 400, "INDORE 400kV SUBSTATION,  Madhya Pradesh, SUBSTN.INDR_IMP.BUS.4B1.MES1.KV", "OK"], [21.8303165, 76.3349053, 1.044, "WRLDCMP.SCADA1.A0008556", 400, "INDIRA SAGAR  400KV kV HYDRO POWER STATION,  Madhya Pradesh, SUBSTN.ISPH_IMP.BUS.4B1.MES1.KV", "OK"], [22.6, 77.75, 1.01225, "WRLDCMP.SCADA1.A0001822", 400, "ITARSI 400kV SUBSTATION,  Madhya Pradesh, SUBSTN.ITRSI_PG.PMU.4B1.MES1.KV", "OK"], [23.17, 79.98, 1.0059, "WRLDCMP.SCADA1.A0001915", 400, "JABALPUR 400kV SUBSTATION,  Madhya Pradesh, SUBSTN.JBLPR_PG.PMU.4B1.MES1.KV", "OK"], [18.25, 74.15, 1.0232, "WRLDCMP.SCADA1.A0029493", 400, "JEJURI 400kV SUBSTATION,  maharashtra, SUBSTN.JEJR4_MH.BUS.4_B5.MES1.KV", "OK"], [21.73, 70.63, 1.02085, "WRLDCMP.SCADA1.A0019059", 400, "JETPUR     400kV SUBSTATION,  Gujrat, SUBSTN.JETP_JTG.BUS.4B1.MES1.KV", "OK"], [21.88, 72.65, 1.019725, "WRLDCMP.SCADA1.A0001978", 400, "GANDHAR 400kV SUBSTATION,  Gujrat, SUBSTN.JHNOR_GS.BUS.4B1.MES1.KV", "OK"], [22.09, 83.45, 1.029525, "WRLDCMP.SCADA1.A0002072", 400, "JINDAL POWER LTD 400kV SUBSTATION,  Chhattisgarh, SUBSTN.JINDL_IP.BUS.4B1.MES1.KV", "OK"], [17.29, 73.21, 1.03395, "WRLDCMP.SCADA1.A0045742", 400, "JAIGAD 400 kV,  maharashtra, SUBSTN.JAIGD_MH.BUS.4B1.MES1.KV", "OK"], [19.2, 73, 1.034575, "WRLDCMP.SCADA1.A0029818", 400, "KALWA 400kV SUBSTATION,  maharashtra, SUBSTN.KALW4_MH.BUS.4_B1.MES1.KV", "OK"], [24.47, 72.03, 1.0159, "WRLDCMP.SCADA1.A0013427", 400, "ZERDA    400kV SUBSTATION,  Gujrat, SUBSTN.KNSR_GNG.BUS.4B1.MES1.KV", "OK"], [17.28, 74.18, 1.050425, "WRLDCMP.SCADA1.A0030252", 400, "KARAD 400kV SUBSTATION,  maharashtra, SUBSTN.KARD4_MH.BUS.4_B2.MES1.KV", "OK"], [19.04, 73.06, 1.01805, "WRLDCMP.SCADA1.A0030600", 400, "KHARGAR 400kV SUBSTATION,  maharashtra, SUBSTN.KARGR_MH.BUS.4_B1.MES1.KV", "OK"], [22.55, 72.77, 1.038275, "WRLDCMP.SCADA1.A0016608", 400, "KASOR   400kV SUBSTATION,  Gujrat, SUBSTN.KSOR_JMG.BUS.4B1.MES1.KV", "OK"], [23.83, 80.39, 1.038975, "WRLDCMP.SCADA1.A0011456", 400, "KATNI 400kV SUBSTATION,  Madhya Pradesh, SUBSTN.KTN4_JMP.BUS.4B1.MES1.KV", "OK"], [16.69, 74.22, 1.031625, "WRLDCMP.SCADA1.A0030776", 400, "KOLHAPUR 400kV SUBSTATION,  maharashtra, SUBSTN.KLPR4_MH.BUS.4_B1.MES1.KV", "OK"], [21.83, 76.33, 1.048625, "WRLDCMP.SCADA1.A0002414", 400, "KHANDWA  400kV SUBSTATION,  Madhya Pradesh, SUBSTN.KHNDW_PG.BUS.4B1.MES1.KV", "OK"], [21.24, 79.09, 1.0498, "WRLDCMP.SCADA1.A0030935", 400, "KORADI 400 kV,  maharashtra, SUBSTN.KORAD_MH.BUS.4_B1.MES1.KV", "OK"], [22.34, 82.7, 1.05315, "WRLDCMP.SCADA1.A0023143", 400, "KORBA_W 400 kV,  Chhattisgarh, SUBSTN.KRBW4_CG.BUS.4B1.MES1.KV", "OK"], [17.61, 73.8, 1, "WRLDCMP.SCADA1.A0031315", 400, "KOYNA 400kV SUBSTATION,  maharashtra, SUBSTN.KOYN4_MH.BUS.4_B1.MES1.KV", "OK"], [22.38, 82.68, 1.024275, "WRLDCMP.SCADA1.A0002499", 400, "KSTPS 400 kV,  Chhattisgarh, SUBSTN.KSTPS_GS.BUS.4B1.MES1.KV", "OK"], [22.58, 71.78, 1.027675, "WRLDCMP.SCADA1.A0018311", 400, "CHORANIA   400kV SUBSTATION,  Gujrat, SUBSTN.CHOR_JTG.BUS.4B1.MES1.KV", "OK"], [18.63, 74.02, 1.020475, "WRLDCMP.SCADA1.A0031564", 400, "LONIKHAND 400kV SUBSTATION,  maharashtra, SUBSTN.LONKD_MH.BUS.4_B1.MES1.KV", "OK"], [15.59, 73.8, 1.007125, "WRLDCMP.SCADA1.A0002803", 400, "MAPUSA  400kV SUBSTATION,  Goa, SUBSTN.MPUSA_PG.BUS.4B1.MES1.KV", "OK"], [23.45, 75.4, 1.038975, "WRLDCMP.SCADA1.A0009001", 400, "NAGDA   400kV SUBSTATION,  Madhya Pradesh, SUBSTN.NAG4_IMP.BUS.4B1.MES1.KV", "OK"], [18.54, 73.13, 1.0375, "WRLDCMP.SCADA1.A0032301", 400, "NAGOTHANE 400kV SUBSTATION,  maharashtra, SUBSTN.NGOTN_MH.BUS.4_B1.MES1.KV", "OK"], [17.61, 73.8, 1.02145, "WRLDCMP.SCADA1.A0032818", 400, "KOYNA 400kV SUBSTATION,  maharashtra, SUBSTN.KOYNA_MH.BUS.4_B1.MES1.KV", "OK"], [21.16, 81.32, 1.049325, "WRLDCMP.SCADA1.A0023260", 400, "NSPCL       400 kV,  Chhattisgarh, SUBSTN.NSPCL_CG.BUS.4B1.MES1.KV", "OK"], [19.35, 73.17, 1.0245, "WRLDCMP.SCADA1.A0033090", 400, "PADGHE 400kV SUBSTATION,  maharashtra, SUBSTN.PADG4_MH.BUS.4_B2.MES1.KV", "OK"], [18.84, 76.51, 1.0408, "WRLDCMP.SCADA1.A0033491", 400, "PARLI 400kV SUBSTATION,  maharashtra, SUBSTN.PARL2_MH.BUS.4_B1.MES1.KV", "OK"], [22.24, 82.73, 1.0144, "WRLDCMP.SCADA1.A0002753", 400, "LANCO PATADI 400 kV,  Chhattisgarh, SUBSTN.LANCO_IP.BUS.4B1.MES1.KV", "OK"], [21.88, 83.39, 1.050325, "WRLDCMP.SCADA1.A0003249", 400, "RAIGARH  400kV SUBSTATION,  Chhattisgarh, SUBSTN.RAIGR_PG.BUS.4B1.MES1.KV", "OK"], [21.25, 81.62, 0.124525, "WRLDCMP.SCADA1.A0003329", 400, "RAIPUR   400kV SUBSTATION,  Chhattisgarh, SUBSTN.RAIPR_PG.BUS.4B1.MES1.HZ", "OK"], [22.67, 74.94, 1.0571, "WRLDCMP.SCADA1.A0003501", 400, "RAJGARH  400kV SUBSTATION,  Madhya Pradesh, SUBSTN.RAJGH_PG.BUS.4B1.MES1.KV", "OK"], [22.4, 69.72, 1.028625, "WRLDCMP.SCADA1.A0014261", 400, "VADINAR  400 kV,  Gujrat, SUBSTN.VADI_GNG.BUS.4B1.MES1.KV", "OK"], [24.58, 80.87, 1.014225, "WRLDCMP.SCADA1.A0003794", 400, "SATNA    400kV SUBSTATION,  Madhya Pradesh, SUBSTN.STNA4_PG.BUS.4B1.MES1.KV", "OK"], [22.45, 78.1, 1.04485, "WRLDCMP.SCADA1.A0007339", 400, "SATPURA 400 kV,  Madhya Pradesh, SUBSTN.STP4_BMP.BUS.4B1.MES1.KV", "OK"], [22.09, 79.55, 1.047375, "WRLDCMP.SCADA1.A0004003", 400, "SEONI 765kV SUBSTATION,  Madhya Pradesh, SUBSTN.SEON7_PG.BUS.4B1.MES1.KV", "OK"], [0, 0, 1, "WRLDCMP.SCADA1.A0004007", 0, ", , SUBSTN.SEON7_PG.BUS.7B1.MES1.KV", "UNRELIABLE"], [22.14, 82.29, 1.02865, "WRLDCMP.SCADA1.A0004136", 400, "SIPAT 400kV SUBSTATION,  Chhattisgarh, SUBSTN.SIPAT_GS.BUS.4B1.MES1.KV", "OK"], [22.13, 82.29, 0.996888888888889, "WRLDCMP.SCADA1.A0004140", 765, "SIPAT 765 kV,  Chhattisgarh, SUBSTN.SIPAT_GS.BUS.7B1.MES1.KV", "OK"], [23.37, 72.58, 1.02495, "WRLDCMP.SCADA1.A0014515", 400, "SOJA    400kV SUBSTATION,  Gujrat, SUBSTN.SOJA_GNG.BUS.4B1.MES1.KV", "OK"], [17.66, 75.94, 1.0349, "WRLDCMP.SCADA1.A0034777", 400, "SHOLPUR 400kV SUBSTATION,  maharashtra, SUBSTN.SLPR4_MH.BUS.4_B1.MES1.KV", "OK"], [21.83453, 21.83453, 1.0548, "WRLDCMP.SCADA1.A0017158", 400, "SSP     400 kV HYDRO POWER STATION,  Gujrat, SUBSTN.RBPH_JMG.BUS.4B1.MES1.KV", "OK"], [0, 0, 1, "WRLDCMP.SCADA1.A0017160", 0, ", , SUBSTN.RBPH_JMG.BUS.4B2.MES1.KV", "UNRELIABLE"], [21.33, 72.98, 1.09905, "WRLDCMP.SCADA1.A0004536", 400, "SUGEN   400 kV,  Gujrat, SUBSTN.SUGN_JMG.PMU.4B1.MES1.KV", "OK"], [19.86, 72.67, 0.993725, "WRLDCMP.SCADA1.A0004677", 400, "TARAPUR 400 kV,  maharashtra, SUBSTN.TAPR2_GS.BUS.4B1.MES1.KV", "OK"], [21.24, 73.57, 1.03645, "WRLDCMP.SCADA1.A0017330", 400, "UKAI    400kV SUBSTATION,  Gujrat, SUBSTN.UKTH_JMG.BUS.4B1.MES1.KV", "OK"], [20.38, 72.87, 1.01555, "WRLDCMP.SCADA1.A0004765", 400, "VAPI    400kV SUBSTATION,  Gujrat, SUBSTN.VAPI4_PG.BUS.4B1.MES1.KV", "OK"], [22.86, 73.34, 1.047725, "WRLDCMP.SCADA1.A0017784", 400, "WANAKBORI  400 kV,  Gujrat, SUBSTN.WTPS_JMG.BUS.4B1.MES1.KV", "OK"], [20.74, 78.62, 1.040125, "WRLDCMP.SCADA1.A0005331", 400, "WARDHA 400kV SUBSTATION,  maharashtra, SUBSTN.WARDH_PG.BUS.4B1.MES1.KV", "OK"], [0, 0, 1, "WRLDCMP.SCADA1.A0017786", 0, ", , SUBSTN.WTPS_JMG.BUS.4B2.MES1.KV", "UNRELIABLE"], [20.71, 78.57, 1.02729411764706, "WRLDCMP.SCADA1.A0005338", 765, "WARDHA 765kV SUBSTATION,  maharashtra, SUBSTN.WARDH_PG.BUS.7B1.MES1.KV", "OK"], [18.85, 76.53, 1.033325, "WRLDCMP.SCADA1.A0003026", 400, "PARLI-PG 400kV SUBSTATION,  maharashtra, SUBSTN.PARLI_PG.BUS.4B1.MES1.KV", "OK"], [22.88, 72.54, 1.0262, "WRLDCMP.SCADA1.A0003094", 400, "PIRANA_PG 400kV SUBSTATION,  Gujrat, SUBSTN.PIRNA_PG.BUS.4B1.MES1.KV", "OK"], [18.52, 73.85, 1.029375, "WRLDCMP.SCADA1.A0003148", 400, "PUNE-PG 400kV SUBSTATION,  maharashtra, SUBSTN.PUNE4_PG.BUS.4B1.MES1.KV", "OK"], [23.4, 76.7, 1.037975, "WRLDCMP.SCADA1.A0004553", 400, "SHUJALPUR 400kV SUBSTATION,  Madhya Pradesh, SUBSTN.SJLPR_PG.BUS.4B1.MES1.KV", "OK"], [22.82, 69.53, 1.030025, "WRLDCMP.SCADA1.A0001009", 400, "CGPL-MUNDRA  400 kV,  Gujrat, SUBSTN.CGPLM_GS.PMU.4B1.MES1.KVRY", "OK"], [22.5, 82.55, 1.038175, "WRLDCMP.SCADA1.A0000005", 400, "ARYAN COAL 400kV SUBSTATION,  Chhattisgarh, SUBSTN.ACBIL_IP.BUS.4B1.MES1.KV", "OK"], [24.01, 82.41, 1.0224, "WRLDCMP.SCADA1.A0001286", 400, "MAHAN    400 kV,  Madhya Pradesh, SUBSTN.ESRMN_IP.BUS.4B1.MES1.KV", "OK"], [23.29, 70.34, 1.038125, "WRLDCMP.SCADA1.A0000077", 400, "BHIMASAR 400kV SUBSTATION,  Gujrat, SUBSTN.BACHU_PG.BUS.4B1.MES1.KV", "OK"], [22.39, 82.74, 1.028625, "WRLDCMP.SCADA1.A0000177", 400, "BALCO        400 kV,  Chhattisgarh, SUBSTN.BALCO_IP.BUS.4B1.MES1.KV", "OK"], [24.1, 82.66, 1.0075, "WRLDCMP.SCADA1.A0005205", 400, "VINDHYACHAL-IV 400 kV,  Madhya Pradesh, SUBSTN.VSTP4_GS.BUS.4B7.MES1.KV", "OK"], [21.96, 82.41, 1.04565, "WRLDCMP.SCADA1.A0002614", 400, "KSK MAHANADI 400 kV,  Chhattisgarh, SUBSTN.KSKMN_IP.BUS.4B1.MES1.KV", "OK"], [22.08, 82.13, 1.907325, "WRLDCMP.SCADA1.A0000500", 400, "BILASPUR  400kV SUBSTATION,  Chhattisgarh, SUBSTN.BLSPR_PG.BUS.7B1.MES1.KV", "OK"], [22.09, 82.12, 0.526444444444444, "WRLDCMP.SCADA1.A0000493", 765, "BILASPUR  765kV SUBSTATION,  Chhattisgarh, SUBSTN.BLSPR_PG.BUS.4B1.MES1.KV", "OK"], [24.26, 79.09, 1.898975, "WRLDCMP.SCADA1.A0003668", 400, "SASAN 400 kV,  Madhya Pradesh, SUBSTN.SASAN_GS.BUS.7B1.MES1.KV", "OK"], [24.26, 79.09, 0.52678431372549, "WRLDCMP.SCADA1.A0003664", 765, "SASAN 765kV SUBSTATION,  Madhya Pradesh, SUBSTN.SASAN_GS.BUS.4B1.MES1.KV", "OK"], [0, 0, 1, "WRLDCMP.SCADA1.A0003985", 0, ", , SUBSTN.STNA7_PG.PMU.7B1.MES1.KV", "UNRELIABLE"], [0, 0, 1, "WRLDCMP.SCADA1.A0003558", 0, ", , SUBSTN.RGPPL_GS.BUS.4B1.MES1.KV", "UNRELIABLE"], [20.28, 78.98, 1.039075, "WRLDCMP.SCADA1.A0001246", 400, "EMCO ENERGY LIMITED - GMR 400 kV,  maharashtra, SUBSTN.EMCO4_IP.BUS.4B1.MES1.KV", "OK"], [20.92, 72.95, 1.02, "WRLDCMP.SCADA1.A0002957", 400, "NAVSARI 400kV SUBSTATION,  Gujrat, SUBSTN.NAVSR_PG.BUS.4B1.MES1.KV", "OK"], [21.14, 72.64, 1.0232, "WRLDCMP.SCADA1.A0001609", 400, "HAZIRA-EXT 400kV SUBSTATION,  Gujrat, SUBSTN.HAZRA_LD.BUS.4B1.MES1.KV", "OK"], [21.14, 79.39, 1.042, "WRLDCMP.SCADA1.A0002868", 400, "MAUDA 400 kV,  maharashtra, SUBSTN.MAUDA_GS.BUS.4B1.MES1.KV", "OK"], [21.9113225, 83.1881656, 1.038775, "WRLDCMP.SCADA1.A0001097", 400, "DB POWER 400 kV,  Chhattisgarh, SUBSTN.DBPWR_IP.BUS.4B1.MES1.KV", "OK"], [24.150352, 81.9032455, 1.0262, "WRLDCMP.SCADA1.A0001927", 400, "JP NIGRIE 400 kV,  Madhya Pradesh, SUBSTN.JPNGR_IP.BUS.4B1.MES1.KV", "OK"], [22.74, 75.88, 0.998967320261438, "WRLDCMP.SCADA1.A0001653", 765, "INDORE PG 765kV SUBSTATION,  Madhya Pradesh, SUBSTN.INDOR_PG.BUS.7B1.MES1.KV", "OK"], [22.74, 75.84, 1.023825, "WRLDCMP.SCADA1.A0001647", 400, "INDORE 400kV SUBSTATION,  Madhya Pradesh, SUBSTN.INDOR_PG.BUS.4B1.MES1.KV", "OK"], [22.09, 83.45, 1.039025, "WRLDCMP.SCADA1.A0037788", 400, "JINDAL TAMNAR 400 kV,  Chhattisgarh, SUBSTN.JPLII_IP.BUS.4B1.MES1.KV", "OK"], [21.8386818, 73.1589814, 1.029225, "WRLDCMP.SCADA1.A0005266", 400, "VANDANA 400kV SUBSTATION,  Chhattisgarh, SUBSTN.VVLTD_IP.BUS.4B1.MES1.KV", "OK"], [21.89, 83.39, 1.034875, "WRLDCMP.SCADA1.A0023610", 400, "RAITA        400kV SUBSTATION,  Chhattisgarh, SUBSTN.RAITA_CG.BUS.4B1.MES1.KV", "OK"], [23.17, 79.98, 1.00595, "WRLDCMP.SCADA1.A0011014", 400, "JABALPUR 400kV SUBSTATION,  Madhya Pradesh, SUBSTN.JPB4_JMP.BUS.4B1.MES1.KV", "OK"], [18.76, 73.86, 1.021675, "WRLDCMP.SCADA1.A0036060", 400, "CHAKAN 400kV SUBSTATION,  maharashtra, SUBSTN.CHAKN_MH.BUS.4B1.MES1.KV", "OK"], [23.67, 71.77, 1.051025, "WRLDCMP.SCADA1.A0014580", 400, "SAMI    400kV SUBSTATION,  Gujrat, SUBSTN.SAMI_JTG.BUS.4B1.MES1.KV", "OK"], [0, 0, 1, "WRLDCMP.SCADA1.A0018554", 0, ", , SUBSTN.ESSP_JTG.BUS.4B1.MES1.KV", "UNRELIABLE"], [23.17, 70.2, 1.0402, "WRLDCMP.SCADA1.A0020568", 400, "VARSANA  400kV SUBSTATION,  Gujrat, SUBSTN.VRSN_JTG.BUS.4B1.MES1.KV", "OK"], [22.4, 69.72, 1.028625, "WRLDCMP.SCADA1.A0014261", 400, "VADINAR  400 kV,  Gujrat, SUBSTN.VADI_GNG.BUS.4B1.MES1.KV", "OK"], [0, 0, 1, "WRLDCMP.SCADA1.A0002317", 0, ", , SUBSTN.KAWAS_GS.BUS.2B1.MES1.KV", "UNRELIABLE"], [21.46, 72.92, 1.033325, "WRLDCMP.SCADA1.A0016711", 400, "KOSAMBA  400kV SUBSTATION,  Gujrat, SUBSTN.KSMB_JMG.BUS.4B1.MES1.KV", "OK"], [21.41, 79.97, 1.00505, "WRLDCMP.SCADA1.A0035910", 400, "TIRODA 765kV SUBSTATION,  maharashtra, SUBSTN.TIRO7_MH.BUS.4B1.MES1.KV", "OK"], [20.7, 76.99, 1.044025, "WRLDCMP.SCADA1.A0026243", 400, "AKOLA 400kV SUBSTATION,  maharashtra, SUBSTN.AKOL4_MH.BUS.4_B1.MES1.KV", "OK"], [24.09, 82.66, 0.98455, "WRLDCMP.SCADA1.A0005029", 400, "VINDHYACHAL 400kV SUBSTATION,  Madhya Pradesh, SUBSTN.VSTPS_GS.PMU.4B1.MES1.KV", "OK"], [22.86, 73.34, 1.047725, "WRLDCMP.SCADA1.A0017784", 400, "WANAKBORI  400 kV,  Gujrat, SUBSTN.WTPS_JMG.BUS.4B1.MES1.KV", "OK"], [22.74, 75.88, 1.023825, "WRLDCMP.SCADA1.A0001647", 400, "INDORE PG 400kV SUBSTATION,  Madhya Pradesh, SUBSTN.INDOR_PG.BUS.4B1.MES1.KV", "OK"], [22.74, 75.88, 0.998967320261438, "WRLDCMP.SCADA1.A0001653", 765, "INDORE PG 765kV SUBSTATION,  Madhya Pradesh, SUBSTN.INDOR_PG.BUS.7B1.MES1.KV", "OK"], [21.89, 83.39, 1.039975, "WRLDCMP.SCADA1.A0037878", 400, "RAIGARH KOTRA 400kV SUBSTATION,  Chhattisgarh, SUBSTN.KOTRA_PG.BUS.4B1.MES1.KV", "OK"], [21.89, 83.39, 1.03678431372549, "WRLDCMP.SCADA1.A0037886", 765, "RAIGARH KOTRA 765kV SUBSTATION,  Chhattisgarh, SUBSTN.KOTRA_PG.BUS.7B1.MES1.KV", "OK"], [22.09, 83.48, 1.0425, "WRLDCMP.SCADA1.A0038080", 400, "TAMNAR 400kV SUBSTATION,  Chhattisgarh, SUBSTN.TMNR7_PG.BUS.4B1.MES1.KV", "OK"], [22.09, 83.48, 1.03708496732026, "WRLDCMP.SCADA1.A0038084", 765, "TAMNAR 765kV SUBSTATION,  Chhattisgarh, SUBSTN.TMNR7_PG.BUS.7B1.MES1.KV", "OK"], [21.25, 81.62, 1.03895, "WRLDCMP.SCADA1.A0037542", 400, "RAIPUR DURG 400kV SUBSTATION,  Chhattisgarh, SUBSTN.DURG7_PG.BUS.4B1.MES1.KV", "OK"], [19.9, 75.32, 1.034475, "WRLDCMP.SCADA1.A0037317", 400, "AURANGABAD-PG 400kV SUBSTATION,  maharashtra, SUBSTN.ARGBD_PG.BUS.4B1.MES1.KV", "OK"], [23.18, 80.03, 1.006575, "WRLDCMP.SCADA1.A0037668", 400, "JABALPUR PS 400kV SUBSTATION,  Madhya Pradesh, SUBSTN.JBPR7_PG.BUS.4B1.MES1.KV", "OK"], [23.18, 80.03, 1.0100522875817, "WRLDCMP.SCADA1.A0037672", 765, "JABALPUR PS 765kV SUBSTATION,  Madhya Pradesh, SUBSTN.JBPR7_PG.BUS.7B1.MES1.KV", "OK"], [0, 0, 1, "WRLDCMP.SCADA1.A0037624", 0, ", , SUBSTN.GMRCL_IP.BUS.4B1.MES1.KV", "UNRELIABLE"], [21.25, 81.62, 1.02790849673203, "WRLDCMP.SCADA1.A0037546", 765, "RAIPUR DURG 765kV SUBSTATION,  Chhattisgarh, SUBSTN.DURG7_PG.BUS.7B1.MES1.KV", "OK"], [19.91, 75.34, 1.02475816993464, "WRLDCMP.SCADA1.A0037325", 765, "AURANGABAD-PG 765kV SUBSTATION,  maharashtra, SUBSTN.ARGBD_PG.BUS.7B1.MES1.KV", "OK"], [17.65, 75.9, 1.02813071895425, "WRLDCMP.SCADA1.A0004316", 765, "SHOLAPUR-PG 765kV SUBSTATION,  maharashtra, SUBSTN.SOLPR_PG.BUS.7B1.MES1.KV", "OK"], [0, 0, 1, "WRLDCMP.SCADA1.A0038135", 0, ", , SUBSTN.RICHR_LD.BUS.EQ_7_B1.MES1.KV", "UNRELIABLE"], [21.41, 79.97, 0.989647058823529, "WRLDCMP.SCADA1.A0035914", 765, "TIRODA 765kV SUBSTATION,  maharashtra, SUBSTN.TIRO7_MH.BUS.7B1.MES1.KV", "OK"], [20.71, 76.98, 1.034325, "WRLDCMP.SCADA1.A0035998", 400, "AKOLA APL 400kV SUBSTATION,  maharashtra, SUBSTN.AKOL7_MH.BUS.4B1.MES1.KV", "OK"], [20.71, 76.98, 0.992915032679739, "WRLDCMP.SCADA1.A0036002", 765, "AKOLA APL 765kV SUBSTATION,  maharashtra, SUBSTN.AKOL7_MH.BUS.7B1.MES1.KV", "OK"], [0, 0, 1, "WRLDCMP.SCADA1.A0038411", 0, ", , SUBSTN.DGEN4_PG.BUS.4B1.MES1.KV", "UNRELIABLE"], [20.6711799, 78.4916925, 0.987294117647059, "WRLDCMP.SCADA1.A0045800", 765, "KORADI 765kV SUBSTATION,  Maharashtra, SUBSTN.KORD7_MH.BUS.7B1.MES1.KV", "OK"], [20.8858713, 74.6938199, 1.01892810457516, "WRLDCMP.SCADA1.A0038508", 765, "DHULE BDTCL 765kV SUBSTATION,  Maharashtra, SUBSTN.DHUL7_PG.BUS.7B1.MES1.KV", "OK"], [23.1996633, 77.2658038, 1.00067973856209, "WRLDCMP.SCADA1.A0037484", 765, "BHOPAL BDTCL 765kV SUBSTATION,  Madhya Pradesh, SUBSTN.BHPL7_PG.BUS.7B1.MES1.KV", "OK"], [22.46, 83.2, 1.00966013071895, "WRLDCMP.SCADA1.A0038191", 765, "DHARAMJAIGARH 765kV SUBSTATION,  Chhattisgarh, SUBSTN.DRMGH_PG.BUS.7B1.MES1.KV", "OK"], [22.7231823, 71.6095297, 1.04175, "WRLDCMP.SCADA1.A0045225", 400, "MANSAR 400kV SUBSTATION,  Gujarat, SUBSTN.MNSR_JTG.PMU.4B1.MES1.PKVR", "OK"], [21.8876642, 83.1184778, 1.028875, "WRLDCMP.SCADA1.A0038016", 400, "RKM 400kV SUBSTATION,  Chhattisgarh, SUBSTN.RKMPL_IP.BUS.4B1.MES1.KV", "OK"], [20.8858713, 74.6938199, 1.02765, "WRLDCMP.SCADA1.A0038504", 400, "DHULE BDTCL 765kV SUBSTATION,  Maharashtra, SUBSTN.DHUL7_PG.BUS.4B1.MES1.KV", "OK"], [22.1022258, 76.5321834, 1.00925, "WRLDCMP.SCADA1.A0037480", 400, "BHOPAL BDTCL 765kV SUBSTATION,  Madhya Pradesh, SUBSTN.BHPL7_PG.BUS.4B1.MES1.KV", "OK"], [21.96, 76.7, 1.045075, "WRLDCMP.SCADA1.A0009777", 400, "SINGAJI_MALWA 400kV SUBSTATION,  Madhya Pradesh, SUBSTN.SNGH_IMP.BUS.4B1.MES1.KV", "OK"], [21.8640274, 75.1981115, 1.037125, "WRLDCMP.SCADA1.A0008717", 400, "JULWANIA 400kV SUBSTATION,  Madhya Pradesh, SUBSTN.JUL4_IMP.BUS.4B1.MES1.KV", "OK"], [22.61, 75.68, 1.034325, "WRLDCMP.SCADA1.A0009524", 400, "PITHAMPUR 400kV SUBSTATION,  Madhya Pradesh, SUBSTN.PIT4_IMP.BUS.4B1.MES1.KV", "OK"], [21.91, 77.34, 1.007325, "WRLDCMP.SCADA1.A0038352", 400, "KALA 400kV SUBSTATION,  maharashtra, SUBSTN.KALA4_PG.BUS.4B1.MES1.KV", "OK"], [0, 0, 1, "WRLDCMP.SCADA1.A0038757", 0, ", , SUBSTN.DAMAN_PG.BUS.4B1.MES1.KV", "UNRELIABLE"], [0, 0, 1, "WRLDCMP.SCADA1.A0038668", 0, ", , SUBSTN.MBPWR_PG.BUS.4B1.MES1.KV", "UNRELIABLE"], [0, 0, 1, "WRLDCMP.SCADA1.A0038018", 0, ", , SUBSTN.RKMPL_IP.BUS.4B2.MES1.KV", "UNRELIABLE"], [0, 0, 1, "WRLDCMP.SCADA1.A0045574", 0, ", , SUBSTN.IAMRA_MH.BUS.4B1.MES1.KV", "UNRELIABLE"], [21.24, 79.09, 1.058425, "WRLDCMP.SCADA1.A0045955", 400, "KORADI 400 kV,  maharashtra, SUBSTN.KORD2_MH.BUS.4B1.MES1.KV", "OK"], [18.6924635, 74.1127795, 1.02509803921569, "WRLDCMP.SCADA1.A0043525", 765, "PUNE GIS SHIKHRAPUR 765kV SUBSTATION,  Maharashtra, SUBSTN.PUNE7_PG.BUS.7B1.MES1.KV", "OK"], [18.6924635, 74.1127795, 1.03345, "WRLDCMP.SCADA1.A0043521", 400, "PUNE GIS SHIKHRAPUR 400kV SUBSTATION,  Maharashtra, SUBSTN.PUNE7_PG.BUS.4B1.MES1.KV", "OK"], [0, 0, 1, "WRLDCMP.SCADA1.A0046227", 0, ", , SUBSTN.MCPL4_IP.BUS.4B1.MES1.KV", "UNRELIABLE"], [24.03, 82.57, 0.994888888888889, "WRLDCMP.SCADA1.A0043413", 765, "VINDHYACHAL PS 765kV SUBSTATION,  Madhya Pradesh, SUBSTN.VINDP_PG.BUS.7B1.MES1.KV", "OK"], [24.03, 82.57, 1.0069, "WRLDCMP.SCADA1.A0043409", 400, "VINDHYACHAL PS 400kV SUBSTATION,  Madhya Pradesh, SUBSTN.VINDP_PG.BUS.4B1.MES1.KV", "OK"], [22.3222464, 73.1030454, 1.01716339869281, "WRLDCMP.SCADA1.A0043469", 765, "VADODARA  765kV SUBSTATION,  Gujrat, SUBSTN.VDDRA_PG.BUS.7B1.MES1.KV", "OK"], [22.3222464, 73.1030454, 1.02935, "WRLDCMP.SCADA1.A0043465", 400, "VADODARA  400kV SUBSTATION,  Gujrat, SUBSTN.VDDRA_PG.BUS.4B1.MES1.KV", "OK"], [16.69, 74.22, 1.0283, "WRLDCMP.SCADA1.A0046560", 400, "KOLHAPUR 400kV SUBSTATION,  maharashtra, SUBSTN.KLPR7_PG.BUS.4B1.MES1.KV", "OK"] ];
    //String for get request
    this.queryStringParamsForData_ = this.sources_.map(function (obj) {
        return obj[3];
    }).join(',');
    this.sourceRadius_ = 1;//111 kilometres
    this.alpha_ = 1.5;
    this.transparency_ = 120; //between 0 - 255
    this.canvasData_ = [];
    this.normalisedCanvasData_ = [];
    this.minVal_ = null;
    this.maxVal_ = null;
    this.maxHue_ = 180;
    this.minHue_ = 0;
    this.maxHueToDisplay_ = this.maxHue_;
    this.hueDiff_ = this.maxHue_ - this.minHue_; //Lets go for red color for now
    this.hotColorPU_ = 1.05;
    this.coolColorPU_ = 0.95;
    /**
     * Simple bind for functions with no args for bind-less browsers (Safari).
     * @param {Object} thisArg The this value used for the target function.
     * @param {function} func The function to be bound.
     */
    function simpleBindShim(thisArg, func) {
        return function() { func.apply(thisArg); };
    }

    // set provided options, if any
    if (opt_options) {
        this.setOptions(opt_options);
    }
}

AwesomePMUCanvasController.prototype.setOptions = function (options) {
    if (options.consoleWriteFunction !== undefined) {
        this.setConsoleWriteFunction(options.consoleWriteFunction);
    }
    if (options.mapCenter !== undefined) {
        this.setMapCenter(options.mapCenter);
    }
    if (options.sources !== undefined) {
        this.setVoltagePoints(options.sources);
    }
    if (options.computingExpressFunction !== undefined) {
        this.setComputingExpressFunction(options.computingExpressFunction);
    }
    if (options.computingStopExpressFunction !== undefined) {
        this.setComputingStopExpressFunction(options.computingStopExpressFunction);
    }
};

AwesomePMUCanvasController.prototype.setConsoleWriteFunction = function (opt_consoleWriteFunction) {
    this.WriteLineConsole_ = opt_consoleWriteFunction;
};

AwesomePMUCanvasController.prototype.setMapCenter = function (opt_mapCenter) {
    this.mapCenter_ = opt_mapCenter;
};

AwesomePMUCanvasController.prototype.getMapCenter = function () {
    return this.mapCenter_;
};

AwesomePMUCanvasController.prototype.setComputingExpressFunction = function (opt_computingExpressFunction) {
    this.ComputingExpressFunction_ = opt_computingExpressFunction;
};

AwesomePMUCanvasController.prototype.setComputingStopExpressFunction = function (opt_computingStopExpressFunction) {
    this.ComputingStopExpressFunction_ = opt_computingStopExpressFunction;
};

AwesomePMUCanvasController.prototype.onMapMoveZoom = function () {
    //We know that the canvas zoom is fit for zoom level 6 and canvas center latLong are 22.532853026644325, 78.16772421874998
    if(this.isPaintBusy_){
    	return;
    }
    this.isPaintBusy_ = true;
    var currZoom = this.map_.getZoom();
    var zoomRatio = Math.pow(2, currZoom - this.plottedZoom_);
    this.projection_ = this.overLayView_.getProjection();
    var offset = this.projection_.fromLatLngToContainerPixel(this.plottedTopLeft_);
    this.ctx_.clearRect(0, 0, this.xp_, this.yp_);
    this.ctx_.drawImage(this.crapCanvas_, 0, 0, this.xp_, this.yp_, offset.x, offset.y, zoomRatio * this.xp_, zoomRatio * this.yp_);
    this.isPaintBusy_ = false;
}

AwesomePMUCanvasController.prototype.onMapStateChanged = function () {
    //get map bounds
    var ne = this.map_.getBounds().getNorthEast();//topRight
    var sw = this.map_.getBounds().getSouthWest();//bottomLeft
    var latx1 = sw.lng();
    var latx2 = ne.lng();
    var longy1 = sw.lat();
    var longy2 = ne.lat();
    //View Port Width in degrees
    this.lat_width_ = latx2 - latx1;
    this.long_hgt_ = longy2 - longy1;
    //No of degrees per pixel on X axis
    this.npx_ = this.lat_width_ / this.xp_;
    //No of degrees per pixel on Y axis
    this.npy_ = this.long_hgt_ / this.yp_;
    //npxRatio = npy/npx;
    this.npxRatioSquare_ = (this.npy_ * this.npy_) / (this.npx_ * this.npx_);

    WriteLineConsole("*********************************", "warning");
    WriteLineConsole("Writing DIV dimensions in degrees");
    WriteLineConsole("Width of div is " + this.lat_width_, "info");
    WriteLineConsole("Height of div is " + this.long_hgt_, "info");
    WriteLineConsole("Longitude bounds are " + latx1 + " and " + latx2, "info");
    WriteLineConsole("Latitude bounds are " + longy1 + " and " + longy2, "info");
    WriteLineConsole("degrees / pixel on X axis is " + this.npx_, "info");
    WriteLineConsole("degrees / pixel on Y axis is " + this.npy_, "info");

    //Draw the filter image to the canvas
    this.filterCtx_ = this.filterCanvas_.getContext('2d');
    //Clear filter canvas
    this.filterCtx_.clearRect(0, 0, this.filterCanvas_.width, this.filterCanvas_.height);

    this.projection_ = this.overLayView_.getProjection();
    /*
    *Commented because temporary resizing handled seperately
    //We know that the canvas zoom is fit for zoom level 6 and canvas center latLong are 22.532853026644325, 78.16772421874998
    var zoomRatio = Math.pow(2, this.map_.getZoom() - this.plottedZoom_);
    var canvas = document.createElement('canvas');
    canvas.width = this.xp_;
    canvas.height = this.yp_;
    //ctx.setTransform(a, b, c, d, e, f);
    //a (m11) Horizontal scaling. b (m12) Horizontal skewing. c (m21) Vertical skewing. d (m22) Vertical scaling. e (dx) Horizontal moving. f (dy) Vertical moving.
    ////ctx.setTransform(1, 0, 0, 1, 0, 0);
    ////ctx.scale(zoomRatio, zoomRatio);
    var offset = this.projection_.fromLatLngToContainerPixel(this.plottedTopLeft_);
    canvas.getContext("2d").drawImage(this.c_, 0, 0);
    this.ctx_.clearRect(0, 0, this.xp_, this.yp_);
    this.ctx_.drawImage(canvas, 0, 0, this.xp_, this.yp_, offset.x, offset.y, zoomRatio * this.xp_, zoomRatio * this.yp_);
    canvas = null;
    */
    var point = this.projection_.fromLatLngToContainerPixel(new google.maps.LatLng(26.8598, 68.1435));
    var point2 = this.projection_.fromLatLngToContainerPixel(new google.maps.LatLng(14.898497, 84.394126));
    
    ////////filterCtx.drawImage(document.getElementById("filter"), filterTopLeft[0], filterTopLeft[1], parseInt((xp / lat_width) * 16.202546), parseInt((yp / long_hgt) * 11.969271));
    
    ////////this.filterCtx_.drawImage(document.getElementById("filter"), point.x, point.y, parseInt((this.xp_  * 16.2098) / this.lat_width_), parseInt((this.yp_ * 11.9725) / this.long_hgt_));
    this.filterCtx_.drawImage(document.getElementById("filter"), point.x, point.y, point2.x - point.x , point2.y - point.y);
    //Get the filter data
    this.filterDataArray_ = this.filterCtx_.getImageData(0, 0, this.xp_, this.yp_);

    //Run the plotting algorithm
    var self = this;
    setTimeout(function () {
    	requestAnimationFrame(self.runAlgorithm.bind(self));
    }, 20); // 20 ms - should be enough to draw something simple
};

/*Get all Voltage sources locations and p.u values as a [nx3] array */
AwesomePMUCanvasController.prototype.getVoltagePoints = function () {
    // [[1,2],[3,4]];//items[0][0] = 1
    return this.sources_;
};

/*Set all Voltage sources locations and p.u values as a [nx3] array */
AwesomePMUCanvasController.prototype.setVoltagePoints = function (sources) {
    this.sources_ = sources;
};

/*Set all Voltage sources locations and p.u values as a [nx3] array */
AwesomePMUCanvasController.prototype.addVoltPoint = function (source) {
    this.sources_.push(source);
    this.onMapStateChanged().bind(this);
};

AwesomePMUCanvasController.prototype.runAlgorithm = function () {
    this.ComputingExpressFunction_();
    this.plottedZoom_ = this.map_.getZoom();
    this.plottedTopLeft_ = this.getMapTopLeft();
    /*
     ******************Algorithm******************
     calculate npx, npxRatioSquare which change when map bounds change
     clear the result image data array
     foreach source
     calculate the per unit value of source voltage
     get the source location in pixels
     foreach canvaspixel
     calcualate pixel intensity according to the formula and add it to result image data array
     end
     end
     foreach result image data array pixel
     update maximum intensity value
     update minimum intensity value
     end
     calculate normalisation factor for result image data array
     multiply each pixel of result image data array with normalisation factor to get the hue of the pixel
     assign each pixel the hue obtained from normalised image data array
     */
    //clear and initialize
    this.canvasData_ = [];
    for (var iter = 0; iter < this.xp_ * this.yp_; iter++) {
        this.canvasData_[iter] = 1;
    }
    this.normalisedCanvasData_ = [];
    //For each source
    var point;
    var pointTopLeft;
    var pointBottomRight;
    var vsource;
    var vsourceError;
    var xpsource;
    var ypsource;
    var xpx;
    var ypx;
    var xpdestStart = 0;
    var ypdestStart = 0;
    var xpdestEnd = this.xp_;
    var ypdestEnd = this.yp_;
    var ypdest;
    var sources = this.getVoltagePoints();
    var sourceRad = this.sourceRadius_;
    var valToAdd = 0;
    var isValToAddCalculated = false;
    var xCoordinates;
    var yCoordinates;
    var xCoord;
    var yCoord;
    for (var i = 0; i < sources.length; i++) {
        //skip from the for loop if sources status is not "OK"
        if (sources[i][6] != "OK") {
            continue;
        }
        vsource = sources[i][2];
        vsourceError = vsource - 1;
        point = this.projection_.fromLatLngToContainerPixel(new google.maps.LatLng(sources[i][0], sources[i][1]));
        pointTopLeft = this.projection_.fromLatLngToContainerPixel(new google.maps.LatLng(sources[i][0] + sourceRad, sources[i][1] - sourceRad));
        pointBottomRight = this.projection_.fromLatLngToContainerPixel(new google.maps.LatLng(sources[i][0] - sourceRad, sources[i][1] + sourceRad));
        xpdestStart = Math.round(pointTopLeft.x);
        ypdestStart = Math.round(pointTopLeft.y);
        xpdestEnd = Math.round(pointBottomRight.x);
        ypdestEnd = Math.round(pointBottomRight.y);
        if((xpdestStart < 0 && xpdestEnd < 0 && ypdestStart < 0 && ypdestEnd < 0) || (xpdestStart > this.xp_ && xpdestEnd > this.xp_ && ypdestStart > this.yp_ && ypdestEnd > this.yp_)){
            continue;
        }
        xpsource = Math.round(point.x);
        ypsource = Math.round(point.y);
        var stopYIteration = false;
        //calculate the xpdest ypdest bounding boxes for 11 km or 0.1 degrees of radius lat long from source
        for (var xpdest = xpsource; xpdest <= xpdestEnd; xpdest++) {
            stopYIteration = false;
            for (var ypdest = ypsource; stopYIteration == false ; ypdest++) {
                xpx = xpdest - xpsource;
                ypx = ypdest - ypsource;
                if((ypx > xpx) || (ypdest > ypdestEnd)){
                	stopYIteration = true;
                	continue;
                }
                //i = source iterator; xpdest = x axis iterator; ypdest = y axis iterator
                xCoordinates = [xpdest, xpsource - xpx, xpdest        , xpsource - xpx, xpsource + ypx, xpsource - ypx, xpsource + ypx, xpsource - ypx];
                yCoordinates = [ypdest, ypdest        , ypsource - ypx, ypsource - ypx, ypsource + xpx, ypsource + xpx, ypsource - xpx, ypsource - xpx];
                isValToAddCalculated = false;
                //First find if value needs to be calculated by checking if filter exists in any of the 8 quadrants
                for(var coordIter = 0; coordIter < 8; coordIter++){
                    xCoord = xCoordinates[coordIter];
                    yCoord = yCoordinates[coordIter];
                    if(ypx == 0  && (coordIter == 1 || coordIter == 2 || coordIter == 5 || coordIter == 7)){
                    	continue;	
                    } else if (ypx == xpx && coordIter < 4){
                    	continue;
                    }
                    if (this.filterDataArray_.data[(yCoord * this.xp_ + xCoord) * 4] == 255 && yCoord >= 0 && yCoord <= this.yp_ && xCoord >= 0 && xCoord <= this.xp_) {
                        if(!isValToAddCalculated){
                            valToAdd = vsourceError * Math.exp(-this.alpha_ * this.npx_ * Math.sqrt(xpx * xpx + this.npxRatioSquare_ * ypx * ypx));
                            valToAdd += 1;
                            isValToAddCalculated = true;
                        }
                        /**implementing overriding contour**/
                        var canvasPixel = this.canvasData_[(xCoord + yCoord * this.xp_)];
                        //Implementing the overriding contour values instead of added contour values
                        if(valToAdd >= 1 && canvasPixel >= 1 && valToAdd > canvasPixel){
                            //overVolatageCondition
                            canvasPixel = valToAdd;
                        } else if (valToAdd <= 1 && canvasPixel <= 1 && valToAdd < canvasPixel){
                            //underVolatageCondition
                            canvasPixel = valToAdd;
                        } else if (Math.abs(valToAdd - 1) > Math.abs(canvasPixel - 1)){
                            //mixUpCondition
                            canvasPixel = valToAdd;
                        }
                        this.canvasData_[(xCoord + yCoord * this.xp_)] = canvasPixel;
                        /**implementing overriding contour**/
                        /**implementing summing contour**/
                        //this.canvasData_[(xCoord + yCoord * this.xp_)] += valToAdd;
                        /**implementing summing contour**/
                    }
                }
                /*
                *Old computation without quadrant duplication logic
                ////if xpdest and ypdest belong to filter, then calculate the intensity
                if (this.filterDataArray_.data[(ypdest * this.xp_ + xpdest) * 4] == 255 && ypdest > 0 && ypdest < this.yp_ && xpdest > 0 && xpdest < this.xp_) {
                    xpx = xpdest - xpsource;
                    ypx = ypdest - ypsource;
                    valToAdd = vsource * Math.exp(-this.alpha_ * this.npx_ * Math.sqrt(xpx * xpx + this.npxRatioSquare_ * ypx * ypx));
                    this.canvasData_[(xpdest + ypdest * this.xp_)] += valToAdd;
                }
                */
            } //y iterator
        } //x iterator
    } //source iterator
    //Find max and min voltage value in canvasData
    /*
    *max and min vals required for normalising the canvas values but here we are not normalisind the canvas values for coloring
    this.minVal_ = 1000;
    this.maxVal_ = 0;
    for (xpdest = 0; xpdest < this.xp_; xpdest++) {
        for (ypdest = 0; ypdest < this.yp_; ypdest++) {
            //xpdest = x axis iterator; ypdest = y axis iterator
            if (this.filterDataArray_.data[(ypdest * this.xp_ + xpdest) * 4] == 255) {
                var val = this.canvasData_[(xpdest + ypdest * this.xp_)];
                if (val < this.minVal_) {
                    this.minVal_ = val;
                } else if (val > this.maxVal_) {
                    this.maxVal_ = val;
                }
            }
        } //y iterator
    } //x iterator
    
    //Do Normalisation
    //normalisedValue = hueDiff * (1 - value/(maxval-minval));
    //normalisedValue = hueDiff * (1 - value/(valDiff)); where valDiff = maxval-minval;
    var valDiff = this.maxVal_ - this.minVal_;
    for (xpdest = 0; xpdest < this.xp_; xpdest++) {
        for (ypdest = 0; ypdest < this.yp_; ypdest++) {
            //i = source iterator; xpdest = x axis iterator; ypdest = y axis iterator
            //normalisedCanvasData[xpdest,ypdest] = hueDiff * (1 - canvasData[xpdest,ypdest]/(valDiff));//Use this for hue version
            if (this.filterDataArray_.data[(ypdest * this.xp_ + xpdest) * 4] == 255) {
                this.normalisedCanvasData_[(xpdest + ypdest * this.xp_)] = this.hueDiff_ * ((this.canvasData_[(xpdest + ypdest * this.xp_)] - this.minVal_) / (valDiff));//Use this for RGB version
            }
        } //y iterator
    } //x iterator
    */
    
    //Convert pu data values to color values so that <=0.95 is blue and >=1.05 is red
    //normalisedValue = hueDiff * (1 - value/(maxval-minval));
    //normalisedValue = hueDiff * (1 - value/(valDiff)); where valDiff = maxval-minval;
    var hotColorPU = this.hotColorPU_;
    var coolColorPU = this.coolColorPU_;
    var hotCoolPUDiff = hotColorPU - coolColorPU;
    for (xpdest = 0; xpdest < this.xp_; xpdest++) {
        for (ypdest = 0; ypdest < this.yp_; ypdest++) {
            //i = source iterator; xpdest = x axis iterator; ypdest = y axis iterator
            //hue getter stub
            var tempColor;
            var tempVal;
            if (this.filterDataArray_.data[(ypdest * this.xp_ + xpdest) * 4] == 255) {
            	//if data is under the filter...
                tempColor = this.maxHue_; //this is for hottest color pu value
                tempVal = this.canvasData_[(xpdest + ypdest * this.xp_)];
                if(tempVal<=coolColorPU){
                	tempColor = 0;	//this is for coolest color pu value
                } else if(tempVal<hotColorPU){
                	tempColor = this.hueDiff_ * ((tempVal - coolColorPU)/hotCoolPUDiff);
                }
                this.normalisedCanvasData_[(xpdest + ypdest * this.xp_)] = this.maxHue_ - tempColor;//Use this for RGB version
                //getHueFromPU
            }

        } //y iterator
    } //x iterator
    //canvas putImageData reference - http://www.w3schools.com/tags/canvas_putimagedata.asp
    //canvas createImageData reference - http://www.w3schools.com/tags/canvas_createimagedata.asp
    //Clear Canvas Data
    this.canvasData_ = [];
    var hue;
    this.ctx_ = this.c_.getContext("2d");
    var imageData = this.ctx_.getImageData(0, 0, this.xp_, this.yp_);//imageData context.getImageData(x,y,width,height);
    for (xpdest = 0; xpdest < this.xp_; xpdest++) {
        for (ypdest = 0; ypdest < this.yp_; ypdest++) {
            //i = source iterator; xpdest = x axis iterator; ypdest = y axis iterator
            hue = this.normalisedCanvasData_[(xpdest + ypdest * this.xp_)];
            var tempColorRGB = this.hsvToRgb(hue, 1, 1);
            imageData.data[(ypdest * this.xp_ + xpdest) * 4] = tempColorRGB[0];
            imageData.data[(ypdest * this.xp_ + xpdest) * 4 + 1] = tempColorRGB[1];
            imageData.data[(ypdest * this.xp_ + xpdest) * 4 + 2] = tempColorRGB[2];
            tempColorRGB = null;
            //If pixel is in the filter area then display
            if (this.filterDataArray_.data[(ypdest * this.xp_ + xpdest) * 4] != 255) {
                imageData.data[(ypdest * this.xp_ + xpdest) * 4 + 3] = 0;
            } else {
                imageData.data[(ypdest * this.xp_ + xpdest) * 4 + 3] = (hue > this.maxHueToDisplay_) ? 0 : this.transparency_;
            }
        } //y iterator
    } //x iterator
    //Clear normalisedCanvasData
    this.normalisedCanvasData_ = [];
    this.ctx_.putImageData(imageData, 0, 0);
    this.ctx_.strokeStyle = 'black';
    this.ctx_.lineWidth = 1;//LINE WIDTH IN PIXELS
    ////Use source status to create alternate source markers
    for (i = 0; i < sources.length; i++) {
        if (sources[i][6] != "OK") {
            //Use red marker
            sources[i][7].setIcon(this.iconImageRed_);
        } else {
            //Use black marker
            sources[i][7].setIcon(this.iconImage_);
        }
    }
    this.crapCtx_.clearRect(0, 0, this.crapCanvas_.width, this.crapCanvas_.height);
    this.crapCtx_.drawImage(this.c_, 0, 0);
    //computing end express function = server fetch start express function
    this.ComputingStopExpressFunction_();
};

AwesomePMUCanvasController.prototype.onDomReady = function () {
    this.computeCanvasParams();
    //canvas resize listener
    new ResizeSensor(this.c_, this.computeCanvasParams);
};

AwesomePMUCanvasController.prototype.onDomComplete = function () {
    //DOM load initialization function
    if (document.getElementById("filter")) {
        this.filterCanvas_ = document.createElement('canvas');
        this.filterCanvas_.style.width = this.xp_;
        this.filterCanvas_.style.height = this.yp_;
        this.filterCanvas_.setAttribute('width', this.xp_);
        this.filterCanvas_.setAttribute('height', this.yp_);
        this.filterCtx_ = this.filterCanvas_.getContext('2d');
        
        this.crapCanvas_ = document.createElement('canvas');
        this.crapCanvas_.style.width = this.xp_;
        this.crapCanvas_.style.height = this.yp_;
        this.crapCanvas_.setAttribute('width', this.xp_);
        this.crapCanvas_.setAttribute('height', this.yp_);
        this.crapCtx_ = this.crapCanvas_.getContext('2d');
    }
    google.maps.event.addDomListener(window, 'load', this.onMapSourceLoaded.bind(this));
};

//Compute Canvas Parameters - Do this if canvas measurements change
AwesomePMUCanvasController.prototype.computeCanvasParams = function () {
    //Canvas initialization
    this.ctx_ = this.c_.getContext("2d");
    this.ctx_.strokeStyle = 'blue';
    this.ctx_.fillStyle = 'rgba(0, 0, 0, 1)';
    //Get the Width and Length of canvas
    this.xp_ = getComputedStyle(this.c_, null).getPropertyValue('width');
    this.xp_ = this.xp_.substring(0, this.xp_.length - 2);
    this.ctx_.canvas.width = this.xp_;
    this.yp_ = getComputedStyle(this.c_, null).getPropertyValue('height');
    this.yp_ = this.yp_.substring(0, this.yp_.length - 2);
    this.ctx_.canvas.height = this.yp_;
    this.WriteLineConsole_("*********************************", "warning");
    this.WriteLineConsole_("Writing DIV dimensions in pixels");
    this.WriteLineConsole_("Width of div is " + this.xp_, "info");
    this.WriteLineConsole_("Height of div is " + this.yp_, "info");
    //this.WriteLineConsole_("*********************************", "info");
};

AwesomePMUCanvasController.prototype.onMapSourceLoaded = function () {
    //initialize map
    //myCenter = new google.maps.LatLng(20.99340214457691, 77.10533410017817);
    //myCenter will come from options
    var mapProp = {
        center: this.mapCenter_,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map_ = new google.maps.Map(document.getElementById("google_map"), mapProp);

    this.overLayView_ = new google.maps.OverlayView();
    this.overLayView_.draw = function () {
    };
    this.overLayView_.setMap(this.map_);
    //var parser = new geoXML3.parser({map: map, processStyles: true});
    //parser.parse("test.kml");
    ////Using the new technique that doesnot require the geoxml
    ////http://stackoverflow.com/questions/8187837/google-maps-zoom-gets-overriden-when-using-a-kml-file
    var nyLayer = new google.maps.KmlLayer(
        'https://raw.githubusercontent.com/nagasudhirpulla/GoogleMapsAPIExamples/gh-pages/test.kml',
        {
            suppressInfoWindows: true,
            map: this.map_,
            preserveViewport: true
        });

    this.infowindow_ = new google.maps.InfoWindow();
    this.iconImage_ = {
        url: 'locationCircleIcon.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(10, 10),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(5, 5)
    };
    this.iconImageRed_ = {
        url: 'locationCircleIconRed.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(10, 10),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(5, 5)
    };
    //set marker
    var marker = new google.maps.Marker({
        position: this.mapCenter_
    });
    marker.setMap(this.map_);
    marker.addListener('click', toggleBounce);
    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

    for (var i = 0; i < this.sources_.length; i++) {
        this.createMarker(this.sources_[i][5], this.sources_[i][0], this.sources_[i][1], i);
    } //source iterator
    //add listener for map bounds being changed
    //google.maps.event.addListener(map,'bounds_changed', onMapStateChanged); // end of listener callbck

    //Using self variable for accessing the object variables inside the listener - http://stackoverflow.com/questions/1081499/accessing-an-objects-property-from-an-event-listener-call-in-javascript
    //there is also an interesting feature of binding 'this' to the listener and using it in the listener - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
    google.maps.event.addListenerOnce(this.map_, 'bounds_changed', function () {
        this.plottedTopLeft_ = this.getMapTopLeft();
        google.maps.event.addListener(this.map_, 'idle', this.onMapStateChanged.bind(this));
        google.maps.event.addListener(this.map_, 'zoom_changed', this.onMapMoveZoom.bind(this));
        google.maps.event.addListener(this.map_, 'center_changed', this.onMapMoveZoom.bind(this));
    }.bind(this));
    this.map_.setZoom(6);
};

AwesomePMUCanvasController.prototype.getMapTopLeft = function () {
    var top = this.map_.getBounds().getNorthEast().lat();
    var center = this.map_.getCenter();
    var scale = Math.pow(2, this.map_.getZoom());
    var left = center.lng() - (this.xp_ * 180) / (256 * scale);
    return new google.maps.LatLng(top, left);
};

// Utility Function to create a marker
AwesomePMUCanvasController.prototype.createMarker = function (add, lat, lng, sourceIterator) {
    var contentString = add;
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        map: this.map_,
        icon: this.iconImage_,
        zIndex: 1000
    });
    var self = this;
    google.maps.event.addListener(marker, 'click', function () {
        self.infowindow_.setContent(contentString);
        self.infowindow_.open(self.map_, marker);
    });
    //Assign the marker to the sources array
    this.sources_[sourceIterator][7] = marker;
};

AwesomePMUCanvasController.prototype.onMapTransparencyChanged = function () {
    var xp = this.xp_;
    var yp = this.yp_;
    var imageData = this.c_.getContext("2d").getImageData(0, 0, xp, yp);//imageData context.getImageData(x,y,width,height);
    var hue;
    for (var xpdest = 0; xpdest < xp; xpdest++) {
        for (var ypdest = 0; ypdest < yp; ypdest++) {
            //i = source iterator; xpdest = x axis iterator; ypdest = y axis iterator
            ////hue = maxHue - normalisedCanvasData[(xpdest + ypdest * xp)];
            hue = this.rgbToHsv(imageData.data[(ypdest * xp + xpdest) * 4], imageData.data[(ypdest * xp + xpdest) * 4 + 1], imageData.data[(ypdest * xp + xpdest) * 4 + 2])[0];
            //If pixel is in the filter area then display
            if (this.filterDataArray_.data[(ypdest * xp + xpdest) * 4] != 255) {
                imageData.data[(ypdest * xp + xpdest) * 4 + 3] = 0;
            } else {
                imageData.data[(ypdest * xp + xpdest) * 4 + 3] = (hue > this.maxHueToDisplay_ || imageData.data[(ypdest * xp + xpdest) * 4 + 3] == 0) ? 0 : this.transparency_;
            }
        } //y iterator
    } //x iterator
    this.ctx_.putImageData(imageData, 0, 0);
};

AwesomePMUCanvasController.prototype.getPaintCanvas = function () {
    return this.c_;
};

AwesomePMUCanvasController.prototype.setPaintCanvas = function (c) {
    this.c_ = c;
};

AwesomePMUCanvasController.prototype.getPaintContext = function () {
    return this.ctx_;
};

AwesomePMUCanvasController.prototype.setPaintContext = function (ctx) {
    this.ctx_ = ctx;
};

AwesomePMUCanvasController.prototype.getAlpha = function () {
    return this.alpha_;
};

AwesomePMUCanvasController.prototype.setAlpha = function (num) {
    this.alpha_ = num;
    this.onMapStateChanged.apply(this);
};

/*Transperency getter*/
AwesomePMUCanvasController.prototype.getTrans = function () {
    return this.transparency_;
};

/*Transperency setter*/
AwesomePMUCanvasController.prototype.setTrans = function (num) {
    var isRequired = (this.transparency_ == 0 && num > 0);
    this.transparency_ = num;
    if(isRequired){
        this.onMapStateChanged.apply(this);
    } else{
        this.onMapTransparencyChanged.apply(this);
    }
};

/*MaxDisplayHue getter*/
AwesomePMUCanvasController.prototype.getMaxDisplayHue = function () {
    return this.maxHueToDisplay_;
};

/*MaxDisplayHue setter*/
AwesomePMUCanvasController.prototype.setMaxDisplayHue = function (num) {
    var isRequired = num > this.maxHueToDisplay_;
    this.maxHueToDisplay_ = num;
    if(isRequired){
        this.onMapStateChanged.apply(this);
    } else {
        this.onMapTransparencyChanged.apply(this);
    }
    
};
/*per Unit to hue converter setter*/
AwesomePMUCanvasController.prototype.getHueFromPU = function(tempVal){
    var hotColorPU = this.hotColorPU_;
    var coolColorPU = this.coolColorPU_;
    var hotCoolPUDiff = hotColorPU - coolColorPU;
    var tempColor;
    tempColor = this.maxHue_; //this is for hottest color pu value
    if(tempVal<=coolColorPU){
    	tempColor = 0;	//this is for coolest color pu value
    } else if(tempVal<hotColorPU){
    	tempColor = this.hueDiff_ * ((tempVal - coolColorPU)/hotCoolPUDiff);
    }
    return this.maxHue_ - tempColor;
}
/*hue to pu conversion*/
AwesomePMUCanvasController.prototype.getPUFromHue = function(hue){
    var hotColorPU = this.hotColorPU_;
    var coolColorPU = this.coolColorPU_;
    var hotCoolPUDiff = hotColorPU - coolColorPU;
    if(hue > this.maxHue_)
    {
        return this.maxHue_;
    } else if (hue < this.minHue_) {
        return this.minHue_;
    } else {
        return (((this.maxHue_ - hue) * hotCoolPUDiff) / this.hueDiff_) + coolColorPU;
    }
}
/*Get Minimum display per unit value*/
AwesomePMUCanvasController.prototype.getMinDisplayPU = function(){
    return this.getPUFromHue(this.maxHueToDisplay_);
}
/*Get source Radius*/
AwesomePMUCanvasController.prototype.getSourceRadius = function () {
    return this.sourceRadius_;
};
/*Set source Radius*/
AwesomePMUCanvasController.prototype.setSourceRadius = function (num) {
    this.sourceRadius_ = num;
    this.onMapStateChanged.apply(this);
};

/*
 * HSV to RGB color conversion
 *
 * H runs from 0 to 360 degrees
 * S and V run from 0 to 1
 *
 * Ported from the excellent java algorithm by Eugene Vishnevsky at:
 * http://www.cs.rit.edu/~ncs/color/t_convert.html
 */
AwesomePMUCanvasController.prototype.hsvToRgb = function (h, s, v) {
    var r, g, b;
    var i;
    var f, p, q, t;
    // Make sure our arguments stay in-range
    h = Math.max(0, Math.min(360, h));
    ////s = Math.max(0, Math.min(1, s));
    ////v = Math.max(0, Math.min(1, v));
    /****if(s == 0) {
			// Achromatic (grey)
			r = g = b = v;
			return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
			}****/
    h /= 60; // sector 0 to 5
    i = Math.floor(h);
    f = h - i; // factorial part of h
    p = v * (1 - s);
    q = v * (1 - s * f);
    t = v * (1 - s * (1 - f));
    switch (i) {
        case 0:
            r = v;
            g = t;
            b = p;
            break;
        case 1:
            r = q;
            g = v;
            b = p;
            break;
        case 2:
            r = p;
            g = v;
            b = t;
            break;
        case 3:
            r = p;
            g = q;
            b = v;
            break;
        case 4:
            r = t;
            g = p;
            b = v;
            break;
        default: // case 5:
            r = v;
            g = p;
            b = q;
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};

/*
 * RGB to HSV color conversion
 http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
 */
AwesomePMUCanvasController.prototype.rgbToHsv = function (r, g, b) {
    r = r / 255;
    g = g / 255;
    b = b / 255;
    var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    var h, s, v = max;

    var d = max - min;
    s = max == 0 ? 0 : d / max;

    if (max == min) {
        h = 0; // achromatic
    } else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h *= 60;
    }
    return [h, s, v];
};
