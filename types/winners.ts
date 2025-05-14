export interface IWinnerAttributes {
  amountWon: number;
  winnerName: string;
  wonAt: string;
  winnerPhoto: string;
  published: number;
  scholarshipTitle: string;
  testimonialVideo: string;
  testimonialText: string;
}

export interface IWinner {
  type: string;
  id: string;
  attributes: IWinnerAttributes;
}
