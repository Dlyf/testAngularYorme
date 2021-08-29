import { Nutriment } from "./Nutriment";

export class Produit {
    id: number;
    product_name_fr: string;
    image_front_url: string; 
    nutrition_grade_fr: string;
    nutriments: Nutriment;
    generic_name_fr: string;


  constructor(
    id: number, 
    product_name_fr: string, 
    image_front_url: string, 
    nutrition_grade_fr: string, 
    nutriments: Nutriment, 
    generic_name_fr: string
) {
    this.id = id
    this.product_name_fr = product_name_fr
    this.image_front_url = image_front_url
    this.nutrition_grade_fr = nutrition_grade_fr
    this.nutriments = nutriments
    this.generic_name_fr = generic_name_fr
  }

}
