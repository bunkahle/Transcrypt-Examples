#!/usr/bin/env python
# -*- coding: utf-8 -*-

__pragma__ ('alias', 'S', '$')

class TestSystem:

    def read_file(self):
        S("#demo").load("https://raw.githubusercontent.com/bunkahle/Transcrypt-Examples/master/README.md")

    def read_file_var(self):
        # !!! Using js_get solves the first problem
        S.js_get("https://raw.githubusercontent.com/bunkahle/Transcrypt-Examples/master/README.md", self.get_filecontent)

    def get_filecontent(self, response):
        self.file_content = response
        alert(self.file_content)

testSystem = TestSystem()