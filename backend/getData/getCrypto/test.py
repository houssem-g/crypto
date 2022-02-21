# def numbers_Check (list_number, target):
#     res = False
#     for i in range(len(list_number)):
#         for j in list_number:
#             if (list_number.index(j) == i):
#                 continue
#             if (int((list_number[i] + j)) == int(target)):
#                 res = True
#                 break
#     return res
                
# numbers_Check([1,2,3,4], 6)



from collections.abc import Iterable


def flatten(items):
    for x in items:
        if isinstance(x, Iterable):
            for sub_x in x:
                yield sub_x
        else:
            yield x

print(list(flatten([(1,2), [3], [{4:5}], "abc"])))
# we are using generator and on each element from the parameter if the element 
# is an iterable then we iterate over it and return each element inside it otherwise just return the element