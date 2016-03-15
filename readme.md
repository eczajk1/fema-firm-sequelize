# fema-firm-sequelize

Schema and ORM definitions for Federal Emergency Management Agency (FEMA) Flood Insurance Rate Map (FIRM) database, using Sequelize.

Models are designed for [FIRM Database Technical Reference, November 2015](http://www.fema.gov/media-library-data/1449862521789-e97ed4c7b7405faa7c3691603137ec40/FIRM_Database_Technical_Reference_Nov_2015.pdf).  List of most current Technical Reference documents is [here](http://www.fema.gov/media-library/assets/documents/34519).

- [ ] S_Alluvial_Fan
- [x] S_Base_Index
- [ ] S_BFE
- [ ] S_CBRS
- [ ] S_Cst_Gage
- [ ] S_Cst_Tsct_Ln
- [ ] S_Datum_Conv_Pt
- [ ] S_FIRM_Pan
- [ ] S_Fld_Haz_Ar
- [ ] S_Fld_Haz_Ln
- [ ] S_Gage
- [ ] S_Gen_Struct
- [ ] S_HWM
- [ ] S_Hydro_Reach
- [ ] S_Label_Ld
- [ ] S_Label_Pt
- [ ] S_Levee
- [ ] S_LiMWA
- [ ] S_LOMR
- [x] S_Nodes
- [ ] S_PFD_Ln
- [ ] S_PLSS_Ar
- [x] S_Pol_Ar
- [x] S_Profil_Basln
- [ ] S_Riv_Mrk
- [ ] S_Stn_Start
- [x] S_Subbasins
- [ ] S_Submittal_Info
- [ ] S_Topo_Confidence
- [ ] S_Trnsport_Ln
- [ ] S_Tsct_Basln
- [ ] S_Wtr_Ar
- [ ] S_Wtr_Ln
- [x] S_XS
- [x] Study_Info
- [ ] L_Comm_Info
- [ ] L_Comm_Revis
- [ ] L_Cst_Model
- [ ] L_Cst_Struct
- [ ] L_Cst_Tsct_Elev
- [ ] L_ManningsN
- [ ] L_Meetings
- [ ] L_MT2_LOMR
- [ ] L_Mtg_POC
- [ ] L_Pan_Revis
- [ ] L_Pol_FHBM
- [ ] L_Profil_Bkwtr_El
- [ ] L_Profil_Label
- [ ] L_Profil_Panel
- [ ] L_Source_Cit
- [ ] L_Summary_Discharges
- [ ] L_Summary_Elevations
- [ ] L_Survey_Pt
- [x] L_XS_Elev
- [x] L_XS_Struct

## Note

Table schemas have default values defined, which align with guidance from the Technical Reference.  However, this fact could result in some data transformation.  Like, in the source data, if a Required text field was left null, it will be loaded into the target database with the value 'NP'.
