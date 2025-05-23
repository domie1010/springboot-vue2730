








const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"用户管理",
			            "menuJump":"列表",
			            "tableName":"yonghu"
			        }
			    ],
			    "menu":"用户管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"商品信息管理",
                        "menuJump":"列表",
                        "tableName":"shangpin"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"商品信息评价管理",
                        "menuJump":"列表",
                        "tableName":"shangpinCommentback"
                    }
                    ,
                    {
                        "buttons":[
                            "查看"                        ],
                        "menu":"商品信息收藏管理",
                        "menuJump":"列表",
                        "tableName":"shangpinCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "订单",
                            "查看",
                            "删除"
                        ],
                        "menu":"商品信息订单管理",
                        "menuJump":"列表",
                        "tableName":"shangpinOrder"
                    }
                ],
                "menu":"商品信息管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "修改"
			            ],
			            "menu":"会员等级类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryHuiyuandengji"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"新闻类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryNews"
			        }
			        ,
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"商品类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryShangpin"
			        }
			
			    ],
			    "menu":"基础数据管理"
			}
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"新闻信息管理",
			            "menuJump":"列表",
			            "tableName":"news"
			        }
			    ],
			    "menu":"新闻信息管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
	
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看"
	                    ],
	                    "menu":"商品信息管理",
	                    "menuJump":"列表",
	                    "tableName":"shangpin"
	                }
	                ,
	                {
	                    "buttons":[
	                        "查看",
	                        "删除"
	                    ],
	                    "menu":"商品信息评价管理",
	                    "menuJump":"列表",
	                    "tableName":"shangpinCommentback"
	                }
	                ,
	                {
	                    "buttons":[
	                        "查看",
	                        "删除"
	                    ],
	                    "menu":"商品信息收藏管理",
	                    "menuJump":"列表",
	                    "tableName":"shangpinCollection"
	                }
	                ,
	                {
	                    "buttons":[
	                        "订单",
	                        "查看"
	                    ],
	                    "menu":"商品信息订单管理",
	                    "menuJump":"列表",
	                    "tableName":"shangpinOrder"
	                }
	            ],
	            "menu":"商品信息管理"
	        }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看"
			            ],
			            "menu":"新闻信息管理",
			            "menuJump":"列表",
			            "tableName":"news"
			        }
			    ],
			    "menu":"新闻信息管理"
			}
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"用户",
	    "tableName":"yonghu"
	}
]
    }
}
export default menu;
