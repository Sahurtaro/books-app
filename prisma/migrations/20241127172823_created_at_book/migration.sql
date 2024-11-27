-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "genre" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "numPages" INTEGER NOT NULL,
    "pub_year" INTEGER NOT NULL,
    "publisher" TEXT NOT NULL,
    "user_id" INTEGER,
    "image" TEXT NOT NULL,
    "comment_id" INTEGER,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
