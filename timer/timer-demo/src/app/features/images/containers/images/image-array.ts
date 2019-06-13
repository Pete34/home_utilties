export interface SrcSetValues {
  title: string;
  baseImage: string;
  srcSet: string;
}

export const imageArray: SrcSetValues[] = [
  {
    title: 'Baseball in Florida',
    baseImage: 'assets/images/baseball/baseball-500.JPG',
    // tslint:disable-next-line:max-line-length
    srcSet: 'assets/images/baseball/baseball-1000.JPG, 1000w, assets/images/baseball/baseball-1500.JPG, 1500w, assets/images/baseball/baseball-2000.JPG, 2000w, assets/images/baseball/baseball-2500.JPG, 2500w, ',
  },
  {
    title: 'Daisy the Dog',
    baseImage: 'assets/images/daisy/daisy-500.JPG',
    // tslint:disable-next-line:max-line-length
    srcSet: 'assets/images/daisy/daisy-1000.JPG, 1000w, assets/images/daisy/daisy-1500.JPG, 1500w, assets/images/daisy/daisy-2000.JPG, 2000w, assets/images/daisy/daisy-2500.JPG, 2500w, ',
  },
  {
    title: 'A Blue Grass Band',
    baseImage: 'assets/images/band/band-500.jpg',
    // tslint:disable-next-line:max-line-length
    srcSet: 'assets/images/band/band-1000.jpg, 1000w, assets/images/band/band-1500.jpg, 1500w, assets/images/band/band-2000.jpg, 2000w, assets/images/band/band-2500.jpg, 2500w, ',
  },
  {
    title: 'Dee Dee food truck',
    baseImage: 'assets/images/dee_dee/dee_dee-500.jpg',
    // tslint:disable-next-line:max-line-length
    srcSet: 'assets/images/dee_dee/dee_dee-1000.jpg, 1000w, assets/images/dee_dee/dee_dee-1500.jpg, 1500w, assets/images/dee_dee/dee_dee-2000.jpg, 2000w, assets/images/dee_dee/dee_dee-2500.jpg, 2500w, ',
  },
  {
    title: 'Sarasota Bay',
    baseImage: 'assets/images/florida_bay/florida_bay-500.JPG',
    // tslint:disable-next-line:max-line-length
    srcSet: 'assets/images/florida_bay/florida_bay-1000.JPG, 1000w, assets/images/florida_bay/florida_bay-1500.JPG, 1500w, assets/images/florida_bay/florida_bay-2000.JPG, 2000w, assets/images/florida_bay/florida_bay-2500.JPG, 2500w, ',
  },
  {
    title: 'A Wild Sunflower',
    baseImage: 'assets/images/sunflower/sunflower-500.JPG',
    // tslint:disable-next-line:max-line-length
    srcSet: 'assets/images/sunflower/sunflower-1000.JPG, 1000w, assets/images/sunflower/sunflower-1500.JPG, 1500w, assets/images/sunflower/sunflower-2000.JPG, 2000w, assets/images/sunflower/sunflower-2500.JPG, 2500w, ',
  },
  {
    title: 'Some Wild Flowers',
    baseImage: 'assets/images/wildflower/wildflower-500.JPG',
    // tslint:disable-next-line:max-line-length
    srcSet: 'assets/images/wildflower/wildflower-1000.JPG, 1000w, assets/images/wildflower/wildflower-1500.JPG, 1500w, assets/images/wildflower/wildflower-2000.JPG, 2000w, assets/images/wildflower/wildflower-2500.JPG, 2500w, ',
  },
];
