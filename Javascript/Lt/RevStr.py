s = "a good  example"

arr=s.split(" ")
rev=[]
print(arr)
for i in range(len(arr)):
    if arr[i] != " ":
        rev.append(arr[i])
print(rev)
return rev