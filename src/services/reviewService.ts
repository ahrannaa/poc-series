import reviewRepository from "../repository/review.repository.js";

async function findSeries() {
    const review = await reviewRepository.getAllReview();
    return review;
};

async function findReviewByUserId(userId: number) {
    const review = await reviewRepository.getReviewByUserId(userId);
    if (!review) {
      throw ("nenhum review encontrado");
    }
    return review;
};

async function postReview(seriesId: string, review: string, userId: string,){
  const newReview = await reviewRepository.userReview(seriesId, review, userId)
  return newReview;
}

const reviewService = {
  findSeries,
  findReviewByUserId,
  postReview
}

export default reviewService