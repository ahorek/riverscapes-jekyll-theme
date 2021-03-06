---
title: Test
layout: 
comment: You need this file so we get the right navigation structure. Just leave the body empty.
---

{% capture html %}

{% assign entries = site.pages | sort: "path" %}

var NAVTitle = "{{site.title}}";
var NAVHome = "{{site.baseurl}}";
var NAVPages = [
    {% for entry in entries %}

        {% capture slug    %}{{ entry.url | split: "/"   | last                       }}{% endcapture %}
        {% capture current %}{{ entry.url | remove: slug | remove: "//" | append: "/" }}{% endcapture %}
    {% if entry.ignore %}
    {% else %}
    {
        url: "{{entry.url}}",
        absurl: "{{ site.baseurl }}{{ entry.url }}",
        slug: "{{slug}}",
        title: "{{entry.title}}",
        weight: "{{entry.weight}}"
    },
    {% endif %}
    {% endfor %}
];
var SiteSettings = {{ site.settings | jsonify }};
var APPREDIRECTS = {
{% for redir in site.AppRedirects %}
    {{redir.key}}: "{{redir.url}}",
{% endfor %}
}


{% endcapture %}{{ html | strip_newlines | replace:'    ','' | replace:'    ','' | replace:'  ',' ' }}