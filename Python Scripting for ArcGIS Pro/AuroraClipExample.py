# Description: Clip soils areas that fall within the railroad buffer zone

import arcpy

arcpy.env.workspace = "C:\\Users\All Users\brett\\OneDrive\\Documents\\ArcGIS\\Projects\\ESRI Training\\ProIntegratingData\\AuroraPlanning\\AuroraRail.gdb"

in_fc = "C:\\Users\\brett\\OneDrive\\Documents\\ArcGIS\\Projects\\ESRI Training\\ProIntegratingData\\AuroraPlanning\\AuroraRail.gdb\\Soils_Aurora"
clip_fc = "C:\\Users\\brett\\OneDrive\\Documents\\ArcGIS\\Projects\\ESRI Training\\ProIntegratingData\\AuroraPlanning\\AuroraRail.gdb\\Railroads_Aurora_Buffer"
out_fc = "C:\\Users\\brett\\OneDrive\\Documents\\ArcGIS\\Projects\\ESRI Training\\ProIntegratingData\\AuroraPlanning\\AuroraRail.gdb\\Soils_Clip"

arcpy.analysis.Clip(in_fc, clip_fc, out_fc)
