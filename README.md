# AMPP

## Introduction

This is a Web based 3D Printing process planning software.

**Features**
- Model upload
- Model view using Three.js
- Get model height using C++ based dll file

**How to import**
- IDE: Eclipse
- Put "getpara.dll" in the java.library.path.
- Set the file upload path in "src\main\resources\config\application.properties".
- Run!

## Version Control
*2018.1.23*
1. Simple BootStrap based Web UI.
2. File upload function. Solid path. Editable in the "src\main\resources\config\application.properties".
3. Model view, using Three.js.
4. Get the Model height(simple JNI without 3rd party libs). dll file is also in the repository as "getpara.dll". 
   This file must be imported as java.library.path.
