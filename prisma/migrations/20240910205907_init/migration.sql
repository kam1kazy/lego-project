-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT,
    "owner_projects" INTEGER[],
    "owner_tasks" INTEGER[],
    "shares_projects" INTEGER[],
    "shares_tasks" INTEGER[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "status" TEXT,
    "create_date" TIMESTAMP(3),
    "image" TEXT,
    "task_ids" INTEGER[],
    "owner_id" INTEGER NOT NULL,
    "shares_id" INTEGER[],

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "status" TEXT,
    "create_date" TIMESTAMP(3),
    "owner_id" INTEGER NOT NULL,
    "project_id" INTEGER[],
    "shares_id" INTEGER[],

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
