import prisma from "../config/database.js";

async function getAllReview() {
   const review = await prisma.review.findMany()
   return review
};

async function getReviewByUserId(userId: number) {
    const serie = await prisma.review.findMany({
      where:{
      id: userId
    },
  })
    return serie;
};

async function userReview ( seriesId: string, review: string, userId: string, ){
  const newReview = await prisma.review.create({
   data: {
     seriesId,
     review,
       userId,
   } 
  });

  console.log(newReview);
  return newReview
}

const reviewRepository = {
    getAllReview,
    getReviewByUserId,
    userReview
 };
 
 export default reviewRepository;