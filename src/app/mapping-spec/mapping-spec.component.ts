import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapping-spec',
  templateUrl: './mapping-spec.component.html',
  styleUrls: ['./mapping-spec.component.scss']
})
export class MappingSpecComponent implements OnInit {

  constructor() { }
  public projectTableHeaders: any = [
    {
      'headerName': 'Label',
      'class': ''
    },
    {
      'headerName': 'Predicted Section',
      'class': ''
    },
    {
      'headerName': 'Actual Section',
      'class': ''
    },
    {
      'headerName': 'Confidence Score',
      'class': ''
    }];
  ngOnInit() {
  }

  mappingSpec= [
    {
      "lpd_Section": "QUALITATIVE AND QUANTITATIVE COMPOSITION",
      "predicted_mapping_content1": "11. DESCRIPTION",
      "actual_mapping": "11. DESCRIPTION",
      "matching_score_content1": 0.8238709569
    },
    {
      "lpd_Section": "PHARMACEUTICAL form",
      "predicted_mapping_content1": "3. DOSAGE FORMS AND STRENGTHS ",
      "actual_mapping": "3. DOSAGE FORMS AND STRENGTHS ",
      "matching_score_content1": 0.3958412409
    },
    {
      "lpd_Section": "Therapeutic indications",
      "predicted_mapping_content1": "1. INDICATIONS AND USAGE",
      "actual_mapping": "1. INDICATIONS AND USAGE",
      "matching_score_content1": 0.3429003954
    },
    {
      "lpd_Section": "Posology and method of administration",
      "predicted_mapping_content1": "2. DOSAGE AND ADMINISTRATION",
      "actual_mapping": "2. DOSAGE AND ADMINISTRATION",
      "matching_score_content1": 0.5971310735
    },
    {
      "lpd_Section": "Contraindications",
      "predicted_mapping_content1": "4. CONTRAINDICATIONS ",
      "actual_mapping": "4. CONTRAINDICATIONS ",
      "matching_score_content1": 0.7713909149
    },
    {
      "lpd_Section": "Special warnings and precautions for use",
      "predicted_mapping_content1": "5. WARNINGS AND PRECAUTIONS ",
      "actual_mapping": "5. WARNINGS AND PRECAUTIONS ",
      "matching_score_content1": 0.5866681933
    },
    {
      "lpd_Section": "Interaction with other medicinal products and other forms of interaction",
      "predicted_mapping_content1": "7. DRUG INTERACTIONS",
      "actual_mapping": "7. DRUG INTERACTIONS",
      "matching_score_content1": 0.9834721088
    },
    {
      "lpd_Section": "Fertility pregnancy and lactation",
      "predicted_mapping_content1": "8. USE IN SPECIFIC POPULATIONS",
      "actual_mapping": "8. USE IN SPECIFIC POPULATIONS",
      "matching_score_content1": 0.8977500796
    },
    {
      "lpd_Section": "Effects on ability to drive and use machines",
      "predicted_mapping_content1": "12.2 Pharmacodynamics",
      "actual_mapping": "5. WARNINGS AND PRECAUTIONS Or 17. PATIENT COUNSELING INFORMATION",
      "matching_score_content1": 0.0891817585
    },
    {
      "lpd_Section": "Undesirable effects",
      "predicted_mapping_content1": "6. ADVERSE REACTIONS",
      "actual_mapping": "6. ADVERSE REACTIONS",
      "matching_score_content1": 0.9729431868
    },
    {
      "lpd_Section": "Overdose",
      "predicted_mapping_content1": "10. OVERDOSAGE ",
      "actual_mapping": "10. OVERDOSAGE ",
      "matching_score_content1": 0.944953382
    },
    {
      "lpd_Section": "PHARMACOLOGICAL PROPERTIES",
      "predicted_mapping_content1": "12. CLINICAL PHARMACOLOGYAnd 12.1. Mechanism of Action ",
      "actual_mapping": "12. CLINICAL PHARMACOLOGYAnd 12.1. Mechanism of Action ",
      "matching_score_content1": 0.9804901481
    },
    {
      "lpd_Section": "Pharmacodynamic properties",
      "predicted_mapping_content1": "14.6 Special Studies",
      "actual_mapping": "12.2. Pharmacodynamics",
      "matching_score_content1": 0.8557490706
    },
    {
      "lpd_Section": "Pharmacokinetic properties",
      "predicted_mapping_content1": "12.3. Pharmacokinetics ",
      "actual_mapping": "12.3. Pharmacokinetics ",
      "matching_score_content1": 0.9431807995
    },
    {
      "lpd_Section": "Preclinical safety data",
      "predicted_mapping_content1": "13. NONCLINICAL TOXICOLOGY ",
      "actual_mapping": "13. NONCLINICAL TOXICOLOGY ",
      "matching_score_content1": 0.8682638407
    },
    {
      "lpd_Section": "Special precautions for storage",
      "predicted_mapping_content1": "2.4 Juvenile Rheumatoid Arthritis",
      "actual_mapping": "16. HOW SUPPLIED/STORAGE AND HANDLING",
      "matching_score_content1": 0.5686163306
    },
    {
      "lpd_Section": "Nature and contents of container",
      "predicted_mapping_content1": "11. DESCRIPTION",
      "actual_mapping": "16. HOW SUPPLIED/STORAGE AND HANDLING",
      "matching_score_content1": 0.1442684829
    },
    {
      "lpd_Section": "Special precautions for disposal and other handling",
      "predicted_mapping_content1": "8.4 Pediatric Use",
      "actual_mapping": "16. HOW SUPPLIED/STORAGE AND HANDLING",
      "matching_score_content1": 0.0903578401
    }
  ];
  getMappingSpec = function(){

  }
}