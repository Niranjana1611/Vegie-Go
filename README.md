# Vegie-Go

INSTALL:

npm init

npm install save express express-session path util mysql bcrypt dotenv

MYSQL:

CREATE DATABASE IF NOT EXISTS www;

USE www;

create table product(id int AUTO_INCREMENT PRIMARY KEY, image varchar(50) NOT NULL, name varchar(20) UNIQUE NOT NULL, rate int NOT NULL);

insert into product(image,name,rate) values("apple.jpg","APPLE",150);
insert into product(image,name,rate) values("apricot.jpg","APRICOT",154);
insert into product(image,name,rate) values("ash gourd.jpg","ASH GOURD",30);
insert into product(image,name,rate) values("avacado.jpg","AVACADO",184);
insert into product(image,name,rate) values("baby corn.png","BABY CORN",190);
insert into product(image,name,rate) values("banana flower.jpg","BANANA FLOWER",30);
insert into product(image,name,rate) values("banana stem.jpg","BANANA STEM",30);
insert into product(image,name,rate) values("banana.jpg","BANANA",34);
insert into product(image,name,rate) values("beans.jpg","BEANS",76);
insert into product(image,name,rate) values("beetroot.jpg","BEETROOT",40);
insert into product(image,name,rate) values("bitter gourd.png","BITTER GOURD",52);
insert into product(image,name,rate) values("blueberry.jpg","BLUEBERRY",2000);
insert into product(image,name,rate) values("bottle gourd.jpg","BOTTLE GOURD",35);
insert into product(image,name,rate) values("brinjal.jpg","BRINJAL",46);
insert into product(image,name,rate) values("broad beans.jpg","BROAD BEANS",25);
insert into product(image,name,rate) values("broccoli.jpg","BROCCOLI",220);
insert into product(image,name,rate) values("cabbage purple.jpg","CABBAGE (PURPLE)",42);
insert into product(image,name,rate) values("cabbage.jpg","CABBAGE",86);
insert into product(image,name,rate) values("Camachile.png","CAMACHILE",1100);
insert into product(image,name,rate) values("capsicum green.jpg","CAPSICUM (GREEN)",86);
insert into product(image,name,rate) values("capsicum red.jpg","CAPSICUM (RED)",200);
insert into product(image,name,rate) values("capsicum yellow.jpg","CAPSICUM (YELLOW)",200);
insert into product(image,name,rate) values("carrot.png","CARROT",82);
insert into product(image,name,rate) values("cauliflower.jpg","CAULIFLOWER",40);
insert into product(image,name,rate) values("cherry.jpg","CHERRY",280);
insert into product(image,name,rate) values("chow chow.jpg","CHOW CHOW",24);
insert into product(image,name,rate) values("cluster beans.jpg", "CLUSTER BEANS",44);
insert into product(image,name,rate) values("coconut.jpeg","COCONUT",20);
insert into product(image,name,rate) values("coriander leaves.jpg","CORIANDER LEAVES",100);
insert into product(image,name,rate) values("corn.jpg","CORN",120);
insert into product(image,name,rate) values("cucumber.jpg","CUCUMBER",62);
insert into product(image,name,rate) values("curry leaves.jpg","CURRY LEAVES",60);
insert into product(image,name,rate) values("custard-apple.jpg","CUSTARD APPLE",200);
insert into product(image,name,rate) values("dates.png","DATES",350);
insert into product(image,name,rate) values("dragon fruit.jpg","DRAGON FRUIT",350);
insert into product(image,name,rate) values("dried red chilli.jpeg","DRIED RED CHILLI",180);
insert into product(image,name,rate) values("drum stick.jpg","DRUM STICK",112);
insert into product(image,name,rate) values("fig.jpg","FIG",500);
insert into product(image,name,rate) values("Garlic.jpg","GARLIC",190);
insert into product(image,name,rate) values("ginger.jpg","GINGER",250);
insert into product(image,name,rate) values("gooseberry.jpg","GOOSEBERRY",200);
insert into product(image,name,rate) values("grapes black.jpg","GRAPES (BLACK)",130);
insert into product(image,name,rate) values("grapes green.jpg","GRAPES (GREEN)",50);
insert into product(image,name,rate) values("green apple.jpg","GREEN APPLE",220);
insert into product(image,name,rate) values("green chilli.jpg","GREEN CHILLI",95);
insert into product(image,name,rate) values("guava.jpg","GUAVA",50);
insert into product(image,name,rate) values("ivy gourd.jpg","IVY GOURD",60);
insert into product(image,name,rate) values("jackfruit.jpg","JACK FRUIT",35);
insert into product(image,name,rate) values("jamun fruit.jpg","JAMUN FRUIT",300);
insert into product(image,name,rate) values("Kiwi.jpg","KIWI",250);
insert into product(image,name,rate) values("ladies finger.jpg","LADIES FINGER",44);
insert into product(image,name,rate) values("lemon.jpeg","LEMON",60);
insert into product(image,name,rate) values("lime.jpg","LIME",100);
insert into product(image,name,rate) values("lychee.jpg","LYCHEE",200);
insert into product(image,name,rate) values("mango.jpg","MANGO",100);
insert into product(image,name,rate) values("mangoosethan.jpg","MANGOOSETHAN",300);
insert into product(image,name,rate) values("mint leaves.jpeg","MINT LEAVES",80);
insert into product(image,name,rate) values("mulberry.jpg","MULBERRY",300);
insert into product(image,name,rate) values("musambi.jpg","MUSAMBI",74);
insert into product(image,name,rate) values("mushroom.jpg","MUSHROOM",100);
insert into product(image,name,rate) values("muskmelon.png","MUSKMELON",60);
insert into product(image,name,rate) values("olives black.png","OLIVES (BLACK)",100);
insert into product(image,name,rate) values("olives green.jpg","OLIVES (GREEN)",100);
insert into product(image,name,rate) values("onion.jpg","ONION",30);
insert into product(image,name,rate) values("orange.jpg","ORANGE",150);
insert into product(image,name,rate) values("palm sprouts.jpg","PALM SPROUT",300);
insert into product(image,name,rate) values("palm.jpg","PALM",160);
insert into product(image,name,rate) values("papaya.jpg","PAPAYA",31);
insert into product(image,name,rate) values("peach.jpg","PEACH",650);
insert into product(image,name,rate) values("pear.jpg","PEAR",150);
insert into product(image,name,rate) values("peas.jpg","PEAS",120);
insert into product(image,name,rate) values("pineapple.jpg","PINEAPPLE",60);
insert into product(image,name,rate) values("plums.jpg","PLUMS",150);
insert into product(image,name,rate) values("pomegranate.png","POMEGRANATE",161);
insert into product(image,name,rate) values("potato.jpg","POTATO",46);
insert into product(image,name,rate) values("pumpkin.jpg","PUMPKIN",30);
insert into product(image,name,rate) values("raddish.jpg","RADDISH",42);
insert into product(image,name,rate) values("Rambutan.jpg","RAMBUTAN",300);
insert into product(image,name,rate) values("raspberry.jpg","RASPBERRY",900);	
insert into product(image,name,rate) values("raw banana.jpg","RAW BANANA",120);
insert into product(image,name,rate) values("raw mango.jpg","RAW MANGO",60);
insert into product(image,name,rate) values("red chilli.jpg","RED CHILLI",170);
insert into product(image,name,rate) values("ridge gourd.png","RIDGE GOURD",88);
insert into product(image,name,rate) values("saffron.jpg","SAFFRON",250000);
insert into product(image,name,rate) values("sambar onion.jpg","SAMBAR ONION",50);
insert into product(image,name,rate) values("sapota.png","SAPOTA",105);
insert into product(image,name,rate) values("snake gourd.jpg","SNAKE GOURD",32);
insert into product(image,name,rate) values("soya beans.jpg","SOYA BEANS",50);
insert into product(image,name,rate) values("starfruit.jpg","STARFRUIT",400);
insert into product(image,name,rate) values("strawberry.jpg","STRAWBERRY",90);
insert into product(image,name,rate) values("sugarcane.jpg","SUGARCANE",15);
insert into product(image,name,rate) values("sweet potato.jpg","SWEET POTATO",60);
insert into product(image,name,rate) values("tamarind.jpeg","TAMARIND",170);
insert into product(image,name,rate) values("tapioca.jpeg","TAPIOCA",30);
insert into product(image,name,rate) values("tender coconut.png","TENDER COCONUT",60);
insert into product(image,name,rate) values("tomato.jpg","TOMATO",23);
insert into product(image,name,rate) values("turmeric.jpg","TURMERIC",75);
insert into product(image,name,rate) values("turnip.jpg","TURNIP",50);
insert into product(image,name,rate) values("watermelon.jpg","WATERMELON",25);
insert into product(image,name,rate) values("yam.jpg","YAM",60);
insert into product(image,name,rate) values("zucchini.jpg","ZUCCHINI",148);


CREATE TABLE cart (id int AUTO_INCREMENT PRIMARY KEY, username varchar(50) NOT NULL, productname varchar(50) NOT NULL, productrate int NOT NULL , productimage varchar(50) NOT NULL);


CREATE TABLE orders (id int AUTO_INCREMENT PRIMARY KEY, username varchar(50) NOT NULL, productname varchar(50) NOT NULL, productrate int NOT NULL , productqty int NOT NULL, amount double GENERATED ALWAYS AS (productrate*productqty/1000));


CREATE TABLE buynow (id int AUTO_INCREMENT PRIMARY KEY, username varchar(50) NOT NULL, totalamt double NOT NULL, address varchar(100) NOT NULL, pincode  int NOT NULL, orderdate date NOT NULL, ordertime time NOT NULL, recdate date NOT NULL, rectime time NOT NULL);
