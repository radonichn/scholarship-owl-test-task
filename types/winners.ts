export interface WinnerAttributes {
  amountWon: number;
  winnerName: string;
  wonAt: string;
  winnerPhoto: string;
  published: number;
  scholarshipTitle: string;
  testimonialVideo: string;
  testimonialText: string;
}

export interface Winner {
  type: string;
  id: string;
  attributes: WinnerAttributes;
}
