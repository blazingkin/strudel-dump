#!/usr/bin/env python3
import os
print("""{
        "_base": "http://localhost:5432/",
        """)
for f in os.listdir("."):
   
    if ".wav" in f:
        name = f.split(".")[0]
        result = "\"" + name + "\": \"" + name + ".wav\","
        print(result)
print("""
"_fake": "_fake"
}""")