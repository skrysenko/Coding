
setwd("/home/proprius/Desktop/Coding/R")
getwd()

rawdata <- read.csv("glnA3mtAssay.csv")
head(rawdata)
summary(rawdata)
str(rawdata)

install.packages("tidyverse")
library(tidyverse)
library(dplyr)
library(ggplot2)

df_f4 = select(rawdata,1:4)
head(df_f4)
