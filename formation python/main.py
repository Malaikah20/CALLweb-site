
"""
# print("hello")
numbre1 = int(input("quelle est le 1 numbre "))
numbre2 = int(input("quelle est le 2 number "))
som = 0

som = float(numbre1 * numbre2)
print ("la some est ", som)
"""
# pour utiliser les boucle 

# nom = input("quelle est votre nom ")
# prenom = input("et votre prenom ? ")
# age = int(input("et votre age ? "))
# if age < 18 :
#     print("bonjour ", prenom, " vous etez mineur")
# if age == 39 :
#     print("bonjour " , prenom, " vous etez adult et vous approchez la quarantaine")
# if age == 30:
#     print("bonjour ", prenom , "vous et adulte")
# else:
#     print("vous netez pas admise")



# LA BOUCLE FOR

# for i in range(5):
#     print(i)

# pour demander a lutilisateur dans la boucle
# for i in range(5):
#     print("entrer le ", i+1, "produit")
#     input( )

# produits = []  # pour stocker les réponses

# for i in range(1, 6):  # de 1 à 5 inclus
#     saisie = input(f"Écrivez le produit {i} : ")
#     produits.append(saisie)  # ou vous pouvez traiter directement la saisie

# # Exemple d'affichage du résultat
# print("Produits saisis :", produits)

# pour fair une liste on fait
# list1 = [2,"HJ",23,45]
# print (type(list1))
# print (list1)
# print(list1[0])pour afficher un element par indice

list1 = [2,"HJ",23,45, "momo"]
for produit in list1:
    print(produit)


