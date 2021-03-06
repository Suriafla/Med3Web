/*
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/

/**
* Dicom info
* @module lib/scripts/loaders/dicominfo
*/

/**
* Class @class DicomInfo for volume some important text data render
*/
class DicomInfo {
  constructor() {
    this.m_patientName = '';
    this.m_patientDateOfBirth = '';
    this.m_studyDescr = '';
    this.m_studyDate = '';
    this.m_seriesTime = '';
    this.m_seriesDescr = '';
    this.m_bodyPartExamined = '';
    this.m_institutionName = '';
    this.m_operatorsName = '';
    this.m_physicansName = '';

    this.m_patientId = '';
    this.m_patientGender = '';
    this.m_acquisionTime = '';
    this.m_manufacturerName = '';
    // tags info for each slice. Each entry is DicomSliceInfo
    this.m_sliceInfo = [];
  }
}

export default DicomInfo;
